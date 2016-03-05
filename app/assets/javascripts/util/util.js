var Util = {
  searchForHandle: function(search_params){
    $.ajax({
      url: '/search',
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
      url: '/handle',
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
  }

};
