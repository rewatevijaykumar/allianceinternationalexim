
AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  once: false, // whether animation should happen only once - while scrolling down
  mirror: true, // whether elements should animate out while scrolling past them

});
// Initialize and add the map
function initMap() {
  // The location of office
  const office = { lat: 51.577170, lng: -0.340710 };
  // The map, centered at office
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: office,
  });
  // The marker, positioned at office
  const marker = new google.maps.Marker({
    position: office,
    map: map,
  });
}

// When the user scrolls down 20px from the top of the document,we will show the button
window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  }
  else {
    document.getElementById("scrollBtn").style.display = "none";
  }
};

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
