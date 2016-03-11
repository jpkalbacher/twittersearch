###Twitter Reputation Ratings
   
## Scoring

The scoring puts heavy weight on count of followers, followed by followers scores, and content score. 

Theoretical Max Content Score: 32 - The content score is an average score for all words in the given set of tweets. (total words/ total tweets). If the user only has one tweet, with all of the shortest possible words to fill the 144 character limit, they would have a score of 32.

Max Followers Score: 100

Max Followers Scores (score based on followers scores): 25 - This is the average score of each of a users followers scores. If all users have a followers score of 100, the average is 100 and the weight of .25 is applied.


## Calls to Twitter API

Upon initial search, the profile data ($twitter.user) and tweets ($twitter.user_feed) are cached. Those cached results for tweets and profile data are then used in building the rating in profile_rating.rb. The ProfileRating model still needs an additional call to the twitter API for the users followers.

## Dictionaries

The positive and negative word dictionaries are stored as sets in lib/dictionaries.rb. Sets allow for O(1) lookup time, so the content_score method has a runtime of O(n). 

## Limitations

The biggest limitation on calculating score is the api call limitation from twitter. 

From Twitter Docs: 
>15 Minute Windows
>Rate limits are divided into 15 minute 
>intervals. Additionally, all endpoints 
>require authentication, so there is no 
>concept of unauthenticated calls and rate 
>limits.

>There are two initial buckets available for GET requests: 15 calls every 15 minutes, 
>and 180 calls every 15 minutes.

>Search
>Search is rate limited at 180 queries per 
>15 minute window.


