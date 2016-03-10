require 'set'

class ProfileRating
	include Dictionaries

	def initialize(screen_name)
		@user = get_user(screen_name)
		@tweets = get_tweets(screen_name)
		@followers = get_followers(screen_name)
	end

	def get_followers(screen_name)
		options = { count: 3 }
		begin 
			@followers = $twitter.followers(screen_name, options)
		rescue
			puts "rate limit hit"
			return []
		end
	end	

	def get_tweets(screen_name)
		options = { count: 200 }
		begin
			Rails.cache.read("#{screen_name}_tweets")
		rescue
			puts "failure to access cache for #{screen_name}"
		end
	end

	def get_user(screen_name)
		begin
			Rails.cache.read("#{screen_name}_profile")
		rescue
			puts "failure to access cache for #{screen_name}"
		end
	end

	def total_score
		(followers_score(@user) + (followers_scores * 0.25) + (0.15 * content_score))
	end

	def content_score
		score = 0
		words = []

		@tweets.each do |tweet|
			words.concat(tweet.text.split(' '))
		end

		words.each do |word|
			score += 1 if POSITIVE_WORDS.include?(word)
			score -= 1 if NEGATIVE_WORDS.include?(word)
		end
		score
	end

	def followers_scores
		followers_count = @user.followers_count
		return 0 if @user.followers_count == 0

		followers_scores_sum = 0

		@followers.each do |follower|
			followers_scores_sum += followers_score(follower)
		end

		followers_scores_sum / followers_count
	end

	def followers_score(user)
		followers = user.followers_count

		if followers > 1000000
			100
		elsif followers > 10000
			98
		elsif followers > 5000
			97
		elsif followers > 1000
			90
		elsif followers > 500
			75
		elsif followers > 100
			65
		elsif followers > 75
			55
		elsif followers > 50
			35
		elsif followers > 25
			10
		elsif followers > 0
			5
		else
			0
		end
	end
end