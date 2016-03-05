var Util = {
  searchForHandle: function(search_params){
    $.ajax({
      url: '/handle',
      type: 'GET',
      data: {handle: {screen_name: search_params}},
      dataType: 'json',
      success: function(handle_result) {
        debugger;
      },
      error: function(error) {
        console.log(error);
      }
    });
  }
};
