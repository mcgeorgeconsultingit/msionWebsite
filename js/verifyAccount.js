document.addEventListener('DOMContentLoaded', function() {
    const nextButtons = document.querySelectorAll('.next-btn');
    const backButtons = document.querySelectorAll('.back-btn');
    const tabLinks = document.querySelectorAll('.nav-link');

    // Next button logic
    nextButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        const nextTab = tabLinks[index + 1];
        if (nextTab) {
          tabLinks[index].classList.remove('active');
          tabLinks[index].setAttribute('disabled', true);
          nextTab.classList.remove('disabled');
          nextTab.classList.add('active');
          nextTab.click();
        }
      });
    });

    // Back button logic
    backButtons.forEach((button, index) => {
      button.addEventListener('click', function() {
        const prevTab = tabLinks[index];
        if (prevTab) {
          tabLinks[index + 1].classList.remove('active');
          tabLinks[index + 1].setAttribute('disabled', true);
          prevTab.classList.remove('disabled');
          prevTab.classList.add('active');
          prevTab.click();
        }
      });
    });
  });