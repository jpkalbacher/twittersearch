window.TweetActions = {
  receiveTweets: function(tweets) {
    AppDispatcher.dispatch({
      actionType: TweetConstants.TWEETS_RECEIVED,
      tweets: tweets['tweets']
    });
  },

  togglePhotos: function() {
    AppDispatcher.dispatch({
      actionType: TweetConstants.TOGGLE_PHOTOS
    });
  }
};

