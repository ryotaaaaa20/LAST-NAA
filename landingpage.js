document.getElementById("myButton").addEventListener("click", function() {
  var loadingBar = document.getElementById("loadingBar");
  var progressBar = document.getElementById("progressBar");

  loadingBar.style.display = "block";

  var width = 0;
  var interval = setInterval(function() {
    if (width >= 100) {
      clearInterval(interval);
      loadingBar.style.display = "none";
      // Redirect to another page or perform an action here
      window.location.href = "mainpage.html";
    } else {
      width++;
      progressBar.style.width = width + "%";
    }
  }, 20); // Change this value to adjust the loading speed
});
