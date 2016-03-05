window.TweetActions = {
  receiveTweets: function(tweets) {
    AppDispatcher.dispatch({
      actionType: TweetConstants.TWEETS_RECEIVED,
      tweets: tweets
    });
  }
};

