// loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(function () {
    // Your code here
    loader.classList.add("loader-hidden");
  }, 2000);

  loader.addEventListener("transitionend", () => {
    document.body.removeChild("loader");
  });
});

// updater
var date = document.lastModified;
document.getElementById("last-update").innerHTML = "Last updated " + date;
