// menu button
function toggleMenu() {
  var navbarLinks = document.getElementById("navbarLinks");
  navbarLinks.classList.toggle("show");
}
// update the date on my blog post
document.addEventListener("DOMContentLoaded", function () {
  function formatDate(date) {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  let currentDate = new Date();
  document.getElementById("blog-date-1").innerHTML = formatDate(currentDate);
  document.getElementById("blog-date-2").innerHTML = formatDate(currentDate);
  document.getElementById("blog-date-3").innerHTML = formatDate(currentDate);
  document.getElementById("blog-date-4").innerHTML = formatDate(currentDate);
  document.getElementById("blog-date-5").innerHTML = formatDate(currentDate);
});
