(function(root){
  var CHANGE_EVENT = "change";
  var _tweets = [];
  var _filter = 'off';
  var _date_sort = 'off'
  var _retweets_sort = 'off'

  var filterPhotos = function(){
    if (_filter == 'off'){
      _filter = 'on';
    } else {
      _filter = 'off';
    }
  };

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
      return new Date(b['created_at']) - new Date(a['created_at']);
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
      var filtered_tweets = [];

      if (_filter == 'off'){
        filtered_tweets = _tweets;
      } else {
        for(var i = 0; i < _tweets.length; i++){
          if (_tweets[i].photo_entity){
            filtered_tweets.push(_tweets[i]);
          }   
        }
      }
      return filtered_tweets;
    },

    dispatcherId: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case TweetConstants.TWEETS_RECEIVED:
          resetTweets(payload.tweets);
          TweetStore.emit(CHANGE_EVENT);
          break;
        case TweetConstants.TOGGLE_PHOTOS:
          filterPhotos();
          TweetStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
