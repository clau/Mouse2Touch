/*
---
description: A MooTools plugin that automatically map mouse events to touch events

license: MIT-style

authors:
- Chi Wai Lau (http://tabqwert.com)
- Scott Kyle (http://appden.com)
- Bram Loogman

requires:
- core/1.2.4: '*'

provides: [Mouse2Touch]
...
*/
(function() {
  try {
    document.createEvent("TouchEvent");
  } catch(e) {
    return;
  }
  
  ['touchstart', 'touchmove', 'touchend'].each(function(type){
      Element.NativeEvents[type] = 2;
  });

  var mapping = {
    'mousedown': 'touchstart',
    'mousemove': 'touchmove',
    'mouseup': 'touchend'
  };
    
  Object.each(mapping, function(touch, mouse) {
    Element.Events[touch] = {
       condition: function(e) {
         var useTouch = this.retrieve('useTouch');
         if (!useTouch) return false;
         useTouch[mouse]++;
         return true;
       }
    }
    Element.Events[mouse] = {
      condition: function(e) {
        var useTouch = this.retrieve('useTouch');  
        if (!useTouch || !useTouch[mouse]) return true;
        useTouch[mouse]--;
        return false;
      },
      onAdd: function(fn) {
        var useTouch = this.retrieve('useTouch', {});
        if (!useTouch[mouse]) useTouch[mouse] = 0;
        this.addEvent(touch, fn);
        
      },
      onRemove: function(fn) {
        this.removeEvent(touch, fn);
      }
    };
  });  
})();