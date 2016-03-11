require 'set'

class ProfileRating
	include Dictionaries

	def initialize(screen_name, user = nil, followers = nil, tweets = nil)
		@user = user || get_user(screen_name)
		@tweets = tweets || get_tweets(screen_name)
		@followers = followers || get_followers(screen_name)
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
		(followers_score(@user) + (followers_scores * 0.25) + (0.15 * content_score)).round
	end

	def content_score
		score = 0
		words = []
		return 0 if @tweets.count == 0

		@tweets.each do |tweet|
			words.concat(tweet.text.split(' '))
		end

		words.each do |word|
			score += 1 if POSITIVE_WORDS.include?(word)
			score -= 1 if NEGATIVE_WORDS.include?(word)
		end
		score.to_f / @tweets.count
	end

	def followers_scores
		followers_count = @user.followers_count
		return 0 if @followers.count == 0

		followers_scores_sum = 0

		@followers.each do |follower|
			followers_scores_sum += followers_score(follower)
		end

		#average score of each follower in the @followers array
		followers_scores_sum / @followers.count
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