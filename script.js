
// get the nav bar's html
let nav = fetch('./nav.html')
  .then(response => (new DOMParser).parseFromString(response.text(), "text/html")).getElementById("nav")
  .then(element => {
    document.getElementById("nav").replaceWith(element);
  });
