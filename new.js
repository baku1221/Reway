// Function to handle the scroll event
function handleScroll() {
  const navBar = document.querySelector('.nav');

  // Check if the user has scrolled down
  if (window.scrollY > 0) {
      // Remove the transparent class to change the background color
      navBar.classList.remove('transparent');
      // Add a CSS class to change the background color
      navBar.classList.add('scrolled');
  } else {
      // Add the transparent class to make the background transparent
      navBar.classList.add('transparent');
      // Remove the scrolled class to revert to transparent background
      navBar.classList.remove('scrolled');
  }
}

// Add a scroll event listener
window.addEventListener('scroll', handleScroll);
