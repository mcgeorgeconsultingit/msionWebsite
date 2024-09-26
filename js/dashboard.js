const table = document.querySelector('table')
const selectAllCheckbox = document.querySelector('#select-all');
const candidateCheckboxes = document.querySelectorAll("#candidateCheckbox");

document.querySelectorAll('.trigger-cell').forEach(cell => {
  
  const menu = cell.querySelector('.modal-menu');
  const updateMenuPosition = () => {
    const rect = cell.getBoundingClientRect(); // Gets the position of the cell with a menu attatched

    // Positions the menu relative to the cell
    menu.style.left = `${rect.left}px`;
  };

  cell.addEventListener('click', () => {
    menu.style.position = 'absolute';
    updateMenuPosition();
    menu.classList.toggle('active') ;
  });

  // Hides the menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!cell.contains(event.target) && !menu.contains(event.target)) {
      menu.classList.remove('active') ; // Hide the menu if clicked outside
    }
  });

  // Updates the menu position on window resize
  window.addEventListener('resize', () => {
    if (menu.style.display === 'block') {
      updateMenuPosition();
    }
  });
  table.addEventListener('scroll', () => {
      updateMenuPosition();
  });
});

const filledStar = "./assets/star-rating.svg";
const emptyStar = "./assets/star-rating-empty.svg";


function renderStarsForAll() {
    // Get all elements with the class 'star-rating'
    const starRatingElements = document.querySelectorAll('.star-rating');

    // Loop through each rating element and render the appropriate stars
    starRatingElements.forEach(ratingElement => {
      const rating = parseInt(ratingElement.getAttribute('data-rating'), 10);

      // Clear previous stars if they exist
      ratingElement.innerHTML = '';

      // Add stars based on the rating
      for (let i = 1; i <= 5; i++) {
        const starImg = document.createElement('img');
        starImg.src = i <= rating ? filledStar : emptyStar;
        starImg.classList.add('star');
        ratingElement.appendChild(starImg);
      }
    });
  }

  renderStarsForAll()