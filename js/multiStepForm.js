document.addEventListener("DOMContentLoaded", () => {
  // Select all social handle divs and link input divs
  const socialHandles = document.querySelectorAll(".social-icons div");
  const linkInputs = document.querySelectorAll(".link_input");

  let currentTab = 0; // Current tab is set to be the first tab (0)
  showTab(currentTab); // Display the current tab

  function showTab(n) {
    // This function will display the specified tab of the form
    const tabs = document.querySelectorAll(".tab");
    tabs[n].classList.add("active");

    // Adjust the Next/Previous buttons
    if (n == 0) {
      document.querySelector(".btn-secondary").style.display = "none";
    } else {
      document.querySelector(".btn-secondary").style.display = "inline";
    }
    if (n == tabs.length - 1) {
      document.querySelector(".btn-primary").textContent = "Submit";
    } else {
      document.querySelector(".btn-primary").textContent = "Continue";
    }
  }

  function nextPrev(n) {
    // This function will figure out which tab to display
    const tabs = document.querySelectorAll(".tab");
    tabs[currentTab].classList.remove("active");

    // Increase or decrease the current tab by 1
    currentTab = currentTab + n;

    // if you have reached the end of the form...
    if (currentTab >= tabs.length) {
      return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
  }

  // Event listeners for navigation buttons
  document
    .querySelector(".btn-secondary")
    .addEventListener("click", function () {
      nextPrev(-1);
    });

  document
    .querySelector(".btn-primary")
    .addEventListener("click", function () {
      nextPrev(1);
    });

  // Function to toggle active class and display state
  function toggleActiveLink(event) {
    // Get the id of the clicked social handle
    const clickedId = event.currentTarget.id;

    // Add the active class to the clicked social handle div and the corresponding link input div
    event.currentTarget.classList.toggle("active");
    document
      .querySelector(`.link_input#${clickedId}`)
      .classList.toggle("active");
  }

  // Add click event listener to each social handle div
  socialHandles.forEach((handle) => {
    handle.addEventListener("click", toggleActiveLink);
  });
});