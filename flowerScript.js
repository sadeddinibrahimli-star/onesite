//Part for the F5 key return it to the beggining
document.onkeydown = fkey;
document.onkeypress = fkey
document.onkeyup = fkey;

var wasPressed = false;

function fkey(e) {
    e = e || window.event;
    if (wasPressed) return;

    if (e.keyCode == 116) {
        setTimeout(() => {
            window.location.href = "site.html"
        })
        wasPressed = true;
    }
}