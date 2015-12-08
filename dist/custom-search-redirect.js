(function redirectSearch() {
  // redirect search queries to custom search endpoint
  function hasSearch() {
    return document.location.search.indexOf('q=') !== -1;
  }
  if (hasSearch()) {
    console.log('has search', document.location.search);
    var customSearchUrl = 'https://www.google.com/cse/publicurl?cx=017313398942136460773:ey1oxxkrkve&';
    document.location = customSearchUrl + document.location.search.substr(1);
  }
}());
