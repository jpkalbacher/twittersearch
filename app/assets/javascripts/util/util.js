var Util = {
  searchForHandle: function(search_params){
    $.ajax({
      url: 'api/handle',
      type: 'GET',
      data: {searches: {screen_name: search_params}},
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
      url: 'api/2',
      type: 'GET',
      data: {searches: {screen_name: screen_name}},
      dataType: 'json',
      success: function(result) {
        ProfileActions.receiveProfile(result);
      },
      error: function(error) {
        console.log(error);
      }
    }); 
  },

  fetchRating: function(screen_name){
    $.ajax({
      url: 'profile_rating',
      type: 'GET',
      data: {searches: {screen_name: screen_name}},
      dataType: 'json',
      success: function(result) {
        ProfileActions.receiveRating(result);
        console.log('got profile score');
      },
      error: function(error) {
        console.log(error);
      }
    }); 
  },

  fetchTweets: function(screen_name){
    $.ajax({
      url: 'api/tweets',
      type: 'GET',
      data: {searches: {screen_name: screen_name}},
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
