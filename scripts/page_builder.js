(function() {
  resizePage();
  setLogo();
  setTimeout(startNameAnimation, 500);
  createIcons();
  window.addEventListener("resize", resizePage, false);
})();