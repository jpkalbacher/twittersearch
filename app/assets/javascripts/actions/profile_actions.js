window.ProfileActions = {
  receiveProfile: function(result) {
    AppDispatcher.dispatch({
      actionType: ProfileConstants.PROFILE_RECEIVED,
      result: result
    });
  }
};

