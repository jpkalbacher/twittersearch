window.SearchActions = {
  receiveSearchResults: function(results) {
    AppDispatcher.dispatch({
      actionType: SearchConstants.SEARCH_RESULTS_RECEIVED,
      results: results
    });
  }
};
