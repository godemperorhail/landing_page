(function () {
  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  /*=====================================
    Sticky
    ======================================= */





  // WOW active
  new WOW().init();
})();
