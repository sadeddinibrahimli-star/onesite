//Part for the F5 key return it to the beggining
document.onkeydown = fkey;
document.onkeypress = fkey
document.onkeyup = fkey;
//if refreshed go back to main site with f5
const wasPressed = false;
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
// in here also refresh button
window.onload = function() {
    // Check if the page is being refreshed
    if (performance.navigation.type == 1) {
        // Redirect to another site if the page is refreshed
        window.location.href = 'site.html'; // Replace with your target URL
    }
};