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
    Element.Events[mouse] = {
	  onAdd: function(fn) {
        this.addEvent(touch, fn);
	  }
    };
  });  
})();