function load(){
    var int = setInterval(function() {
        var canvas = document.getElementById("canvas");
        canvas.width = document.body.clientWidth;
        canvas.height = document.body.clientHeight;
        console.log(canvas.width+"px, "+canvas.height+"px");
    }, 1)
}
document.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
}, false);
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}