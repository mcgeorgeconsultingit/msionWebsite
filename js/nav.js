addEventListener("load", () => {
    const nav = document.querySelector('nav');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
        burger.classList.toggle('active')
    })

});

const userMenu = document.querySelector('.user-menu');
const imgButton = document.querySelector('.menu-trigger');

// Event listener for button clicks
  imgButton.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent the click event from propagating to the window
    userMenu.classList.toggle('active');
  });

// Close the container when clicking outside of it
window.addEventListener('click', (event) => {
  if (!userMenu.contains(event.target)) {
    userMenu.classList.remove('active');
  }
});

// Prevent closing when clicking inside the result container
userMenu.addEventListener('click', (event) => {
  event.stopPropagation();
});