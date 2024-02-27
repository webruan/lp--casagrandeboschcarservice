document.addEventListener("DOMContentLoaded", function() {
  const bodyElement = document.querySelector('body'); // Get the body element
  
  const menuButton = document.getElementById('menu-button'); // Menu button, the one on the navigation bar
  const linkButtons = document.querySelectorAll('.link-button'); // Navigation links, those inside the modal element
  const modal = document.getElementById('menu-modal'); // Modal, the screen that contains the navigation links

  // Button icons
  const icon = document.querySelector('.icon'); // Hambuerguer, When modal is close (inside the menu-button div)
  const close = document.getElementById('close'); // X mark, When modal is open

  // Function to open the modal
  function openMenu() {
    icon.style.opacity = '0'; // Turn the hamburguer icon invisible
    modal.style.display = 'block'; // Opens the modal in full view
    bodyElement.style.overflowY = 'hidden'; // Prevent page scrolling
  }

  // Function to close the modal
  function closeMenu() {
    icon.style.opacity = '1'; // Turn the hamburguer icon visible
    modal.style.display = 'none'; // Make the modal disappear
    bodyElement.style.overflow = 'auto'; // Enable page scrolling
  }

  // Add a click event when the menu element is pressed
  // It calls the function that will open the modal
  menuButton.addEventListener('click', openMenu);

  // Inverse of the above
  close.addEventListener('click', closeMenu);

  // When some link is clicked, it will call the function to close the modal too
  linkButtons.forEach(linkButton => {
    linkButton.addEventListener('click', closeMenu);
  });
});
