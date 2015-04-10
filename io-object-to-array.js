// Custom filter used to return an array from an object.
// Mutations on the object are observed and propagated to array.
// Array elements are objects containing key and value property.
// Once Polymer adds support for object iteration, this should be removed.
// GitHub issue: https://github.com/Polymer/polymer-expressions/issues/11
(function() {
  var i, key, index;
  PolymerExpressions.prototype.ioObjectToArray = function(object) {
    var array = [];
    array.indexOfObjectKey = function(key) {
      for (i = 0; i < this.length; i++) {
        if (this[i].key === key) return i;
      }
      return -1;
    };
    if (typeof object == 'object') {
      for (key in object) {
        array.push({value: object[key], key: key});
      }
      array.observer = new ObjectObserver(object);
      array.observer.open(function(added, removed, changed, getOldValueFn) {
        for (key in added) {
          array.push({value: added[key], key: key});
        }
        for (key in removed) {
          index = array.indexOfObjectKey(key);
          if (index !== -1) {
            array.splice(index, 1);
          }
        }
        for (key in changed) {
          index = array.indexOfObjectKey(key);
          if (index !== -1) {
            array[index].value = changed[key];
          }
        }
      }, this);
    }
    return array;
  };
}());
