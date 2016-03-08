var Util = {
  searchForHandle: function(search_params){
    $.ajax({
      url: '/handle',
      type: 'GET',
      data: {handle: {screen_name: search_params}},
      dataType: 'json',
      success: function(results) {
        SearchActions.receiveSearchResults(results);
      },
      error: function(error) {
        console.log(error);
      }
    });
  },

  fetchProfile: function(screen_name){
    $.ajax({
      url: '/user_and_tweets',
      type: 'GET',
      data: {handle: {screen_name: screen_name}},
      dataType: 'json',
      success: function(result) {
        ProfileActions.receiveProfile(result);
      },
      error: function(error) {
        console.log(error);
      }
    }); 
  },

  fetchTweets: function(screen_name){
    $.ajax({
      url: '/tweets',
      type: 'GET',
      data: {handle: {screen_name: screen_name}},
      dataType: 'json',
      success: function(tweets) {
        TweetActions.receiveTweets(tweets);
      },
      error: function(error) {
        console.log(error);
      }
    }); 
  }

};
