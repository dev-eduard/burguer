document.addEventListener("DOMContentLoaded", function() {
  AOS.init({
    once: false
  });
});

window.onload = function() {
  document.getElementById("ano").textContent = new Date().getFullYear();
};