
 
### Twitter Authorization

This application uses the twitter gem (https://github.com/sferik/twitter/) for application-only authentication.

### API

The following GET requests are available under Api::SearchesController:
  - show - returns profile information from a given user
  - tweets - returns latest 200 tweets
  
### Deployed

Hosted by Heroku at http://jeffstwittersearchapp.herokuapp.com/

### Filtering tweets/timeline

Timeline is currently sortable by created_at (tweet date & time) and filterable for tweets with or without images.

### Reputatation score

This score should be based on the # of followers, the content of the tweets and the followers scores.

Dictionaries for scoring tweet content: 

positve words dictionary: https://github.com/jeffreybreen/twitter-sentiment-analysis-tutorial-201107/blob/master/data/opinion-lexicon-English/positive-words.txt

Negative words dictionary: https://github.com/jeffreybreen/twitter-sentiment-analysis-tutorial-201107/blob/master/data/opinion-lexicon-English/negative-words.txt
