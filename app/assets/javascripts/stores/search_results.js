(function(root){
  var CHANGE_EVENT = "change";
  var _found_handles = [];

  var resetFoundHandles = function(foundHandles){
    _found_handles = [foundHandles];
  };

  root.SearchResultsStore = $.extend({}, EventEmitter.prototype, {
    addSearchChangeListener: function(callback){
      this.on(CHANGE_EVENT, callback);
    },

    removeSearchChangeListener: function(callback){
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function(){
      return _found_handles;
    },

    dispatcherId: AppDispatcher.register(function(payload){
      switch(payload.actionType){
        case SearchConstants.SEARCH_RESULTS_RECEIVED:
          resetFoundHandles(payload.results);
          SearchResultsStore.emit(CHANGE_EVENT);
          break;
      }
    })
  });
})(this);
