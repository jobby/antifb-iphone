antifb-iphone
=============

Tiny HTML5 Offline App meant to discourage you from checking facebook all the time...

     python server.py

and then visit http://your-ip-address:8002 on your iPhone, hit '+' to add it to your home screen and you're away.

* server.py serves up the manifest file with the correct mimetype, so the app works offline.
* There's a tiny bit of JS that uses the localStorage API to store the last time you hit the icon - hopefully useful to motivate you!
* Finally, if you really want to give in, an 'fb://' URL scheme is used to launch the real Facebook App.