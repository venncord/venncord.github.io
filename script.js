document.addEventListener("DOMContentLoaded", function() {
  var blueLight = document.getElementById("blue-light");
  document.addEventListener("mousemove", function(event) {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    blueLight.style.left = mouseX + "px";
    blueLight.style.top = mouseY + "px";
  });
});
