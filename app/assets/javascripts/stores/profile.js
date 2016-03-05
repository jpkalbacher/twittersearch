(function(root){
  var CHANGE_EVENT = "change";
  var _profile = {};

  var resetProfile = function(profile){
    _profile = profile;
  };

  root.ProfileStore = $.extend({}, EventEmitter.prototype, {
    addProfileChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeProfileChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    profile: function(){
      return _profile;
    },

    dispatcherId: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case ProfileConstants.PROFILE_RECEIVED:
          resetProfile(payload.result);
          ProfileStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
