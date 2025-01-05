// for toogle button
function showSidebar(){
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = "flex"
  }
  function hideSidebar(){
    const sidebar = document.querySelector(".sidebar")
  sidebar.style.display = "none"
  }

  // for active
// Function to check if an element is in viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
  return !(rect.left > viewWidth || rect.right <= 0);
}

// Function to animate slide-in from right
function animateSlideInRight() {
  var elements = document.querySelectorAll('.active');
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('slide-in');
    }
  });
}

// Check if elements are in viewport on page load
document.addEventListener('DOMContentLoaded', function(event) {
  animateSlideInRight();
});

// Check if elements are in viewport on scroll
window.addEventListener('scroll', function(event) {
  animateSlideInRight();
});

// for third containers
// car pics
// Function to check if an element is in viewport
function isInViewportForProducts(element) {
  var rect = element.getBoundingClientRect();
  var viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
  return !(rect.left > viewWidth || rect.right <= 0);
}

// Function to animate slide-in from right
function animateSlideInRightForProducts() {
  var elements = document.querySelectorAll('.ed-t');
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('slide-in');
    }
  });
}

// Check if elements are in viewport on page load
document.addEventListener('DOMContentLoaded', function(event) {
  animateSlideInRightForProducts();
});

// Check if elements are in viewport on scroll
window.addEventListener('scroll', function(event) {
  animateSlideInRightForProducts();
});

// for steering
// Function to check if an element is in viewport for marketing strategy
function isInViewportForFifth(element) {
  var rect = element.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.top > viewHeight || rect.bottom <= 0);
}

// Function to handle pop-up animation for marketing strategy
function handlePopupForFifth() {
  var elements = document.querySelectorAll('.pop-t');
  elements.forEach(function(element) {
    if (isInViewportForFifth(element)) {
      element.classList.add('show');
    }
  });
}

// Check if elements are in viewport on page load for marketing strategy
document.addEventListener('DOMContentLoaded', function() {
  handlePopupForFifth();
});

// Check if elements are in viewport on scroll for marketing strategy
window.addEventListener('scroll', function() {
  handlePopupForFifth();
});


// for logistics
// Function to check if an element is in viewport
function isInViewportForLogi(element) {
  var rect = element.getBoundingClientRect();
  var viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth);
  return !(rect.left > viewWidth || rect.right <= 0);
}

// Function to animate slide-in from right
function animateSlideInRightForLogi() {
  var elements = document.querySelectorAll('.me-t');
  elements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('slide-in');
    }
  });
}

// Check if elements are in viewport on page load
document.addEventListener('DOMContentLoaded', function(event) {
  animateSlideInRightForLogi();
});

// Check if elements are in viewport on scroll
window.addEventListener('scroll', function(event) {
  animateSlideInRightForLogi();
});