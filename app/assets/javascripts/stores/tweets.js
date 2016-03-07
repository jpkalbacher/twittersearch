(function(root){
  var CHANGE_EVENT = "change";
  var _tweets = [];

  var resetTweets = function(tweets){
    _tweets = tweets;
  };

  var sortTweets = function(){
    _tweets.sort(function(a,b){
      return b['retweets'] - a['retweets'];
    });
  };

  var sortTweetsDate = function(){
    _tweets.sort(function(a,b){
      return b['created_at'] - a['created_at'];
    });
  };

  root.TweetStore = $.extend({}, EventEmitter.prototype, {
    addTweetChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeTweetChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    sortRetweetsAscending: function(){
      sortTweets();
      this.emit(CHANGE_EVENT);
    },

    sortTweetsByDate: function(){
      sortTweetsDate();
      this.emit(CHANGE_EVENT);
    },

    all: function(){
      return _tweets;
    },

    dispatcherId: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case TweetConstants.TWEETS_RECEIVED:
          resetTweets(payload.tweets);
          TweetStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
