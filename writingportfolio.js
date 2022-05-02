var scrollWrapper = document.querySelector(".scrolling-wrapper");

scrollWrapper.addEventListener('wheel', function(e) {

  if (e.deltaY > 0) scrollWrapper.scrollLeft += 20;
  else scrollWrapper.scrollLeft -= 20;
});
