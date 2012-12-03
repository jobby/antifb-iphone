var lastTime = new Date(window.localStorage.getItem('lastTime'));
var now = new Date();

if (lastTime != null) {
    document.write('<p>You last tried to access Facebook on: ' + lastTime + '</p>');
    document.write('<p>This was ' + ((now - lastTime) / 1000) + ' seconds ago.</p>');
}

window.localStorage.setItem('lastTime', now);
