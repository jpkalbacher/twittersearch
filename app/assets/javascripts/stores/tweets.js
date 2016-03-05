(function(root){
  var CHANGE_EVENT = "change";
  var _tweets = [];

  var resetTweets = function(tweets){
    _tweets = tweets;
  };

  root.TweetStore = $.extend({}, EventEmitter.prototype, {
    addTweetChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeTweetChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
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
