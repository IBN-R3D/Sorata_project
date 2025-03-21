// script.js
document.addEventListener("DOMContentLoaded", function() {
  const title = document.getElementById("main-title");
  const originalText = title.textContent;
  title.textContent = "";
  let i = 0;
  function typeWriter() {
    if (i < originalText.length) {
      title.textContent += originalText.charAt(i);
      i++;
      setTimeout(typeWriter, 150);
    }
  }
  typeWriter();
});