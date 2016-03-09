window.ProfileActions = {
  receiveProfile: function(result) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.PROFILE_RECEIVED,
      result: result
    });
  },

  receiveRating: function(result) {
  	AppDispatcher.dispatch({
  		actionType: ProfileConstants.RATING_RECEIVED,
  		result: result
  	})
  }
};

