(function setupCustomSearch() {
  var cx = '017313398942136460773:ey1oxxkrkve';
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://www.google.com/cse/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
})();

document.getElementById('search').addEventListener('click', function () {
  document.getElementById('___gcse_0').style.display = 'block';
});
