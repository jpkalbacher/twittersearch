(function(root){
  var CHANGE_EVENT = "change";
  var _profile = {};
  var _rating = null;

  var resetProfile = function(profile){
    _profile = profile;
  };

  var resetRating = function(rating){
    _rating = rating.rating;
  };

  root.ProfileStore = $.extend({}, EventEmitter.prototype, {
    addProfileChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeProfileChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    addRatingChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeRatingChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    profile: function(){
      return _profile;
    },

    rating: function(){
      return _rating;
    },

    dispatcherId: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ProfileConstants.PROFILE_RECEIVED:
          resetProfile(payload.result);
          ProfileStore.emit(CHANGE_EVENT);
          break;
        case ProfileConstants.RATING_RECEIVED:
          resetRating(payload.result);
          ProfileStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
