(function(root){
  var CHANGE_EVENT = "change";
  var _tweets = [];
  var _filter = 'off';
  var _date_sort = 'off';
  var _retweets_sort = 'off';

  var filterPhotos = function(){
    if (_filter == 'off'){
      _filter = 'on';
    } else {
      _filter = 'off';
    }
  };

  var clearTweets = function(){
    _tweets = [];
  };

  var resetTweets = function(tweets){
    _tweets = tweets;
  };

  var sortTweetsRetweetsDesc = function(){
    _tweets.sort(function(a,b){
      return b['retweets'] - a['retweets'];
    });
  };

  var sortTweetsRetweetsAsc = function(){
    _tweets.sort(function(a,b){
      return a['retweets'] - b['retweets'];
    });
  };

  var sortTweetsDateDesc = function(){
    _tweets.sort(function(a,b){
      return new Date(b['created_at']) - new Date(a['created_at']);
    });
  };

  var sortTweetsDateAsc = function(){
    _tweets.sort(function(a,b){
      return new Date(a['created_at']) - new Date(b['created_at']);
    });
  };

  root.TweetStore = $.extend({}, EventEmitter.prototype, {
    defaultMaxListeners: Infinity,

    addTweetChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeTweetChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    sortTweetsByRetweets: function(){
      _date_sort = 'off';
      if (_retweets_sort == 'off' || _retweets_sort == 'asc') {
        _retweets_sort = 'desc';
        sortTweetsRetweetsDesc();
      } else {
        _retweets_sort = 'asc';
        sortTweetsRetweetsAsc();
      }
      this.emit(CHANGE_EVENT);
    },

    clearTweets: function(){
      clearTweets();
    },

    sortTweetsByDate: function(){
      _retweets_sort = 'off';
      if (_date_sort == 'off' || _date_sort == 'asc') {
        _date_sort = 'desc';
        sortTweetsDateDesc();
      } else {
        _date_sort = 'asc';
        sortTweetsDateAsc();
      }
      this.emit(CHANGE_EVENT);
    },

    all: function(){
      var filtered_tweets = [];

      if (_filter == 'off'){
        filtered_tweets = _tweets;
      } else {
        for(var i = 0; i < _tweets.length; i++){
          if (_tweets[i].media_url){
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
