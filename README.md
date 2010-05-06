Mouse2Touch
===========

Mobile Safari does a good job for making websites work seamlessly in a mouse-free environment. In general, it is pretty painless for both users and developers. For example, if you tap on something, the event would automatically be interpreted and handled as a mouse click. However, not everything is automatic; if the websites have any interactions involving mousedown, mousemove, and mouseup, they will not work well on Mobile Safari.

To support those interactions everywhere, developers need to take care of both touch and mouse events. One approach is to have additional event listeners for touch, but it gets tedious and ugly very quickly. Mouse2Touch takes a more elegant approach - it's a nice little plugin that automatically map your mouse events to touch events.

![Screenshot](http://appgallery.appspot.com/images?img_id=agphcHBnYWxsZXJ5chQLEgxBcHBsaWNhdGlvbnMYza8qDA&img_type=ss)

How to use
----------

Given that you already have included MooTools -core in your app, just include Mouse2Touch.js in your page head.

	#HTML
        <head>
          <title>...</title>
          <script type="text/javascript" src="path/to/mootools-1.2.4-core.js"></script>
          <script type="text/javascript" src="path/to/Mouse2Touch.js"></script>
        </head>

Support
-----------
Please contact me (clau@tabqwerty.com) if you have any suggestions or comments.