
// get the nav bar's html
let nav = fetch('./nav.html')
  .then(response => (new DOMParser).parseFromString(response.text(), "text/html")) //.getElementById("nav")
  .then(element => {
    console.log(element, element.getElementById);

    // document.getElementById("nav").replaceWith(element);
  });
