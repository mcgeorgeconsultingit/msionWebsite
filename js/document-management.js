document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("[name='tab-select']");
  const list = document.querySelector(".documents-view");
  const quickActions = document.querySelector(".quick-actions");
  const quickActionsMenu = document.querySelector(".quick-actions-menu");
  const amButton = document.querySelector(".am");
  const pmButton = document.querySelector(".pm");
  const stars = document.querySelectorAll(".star");
  const documentCards = document.querySelectorAll(".document-card");

  //  Both tabs are actually rendered but I used css classes to hide
  //  or display the documents set depending on which category is clicked

  Array.from(tabs).forEach((tab) => {
    tab.addEventListener("click", (e) => {
      list.classList.remove("admin", "applicants");
      list.classList.add(tab.id);
      quickActionsMenu.classList.remove("admin", "applicants");
      quickActionsMenu.classList.add(tab.id);
    });
  });

  //  I used the 'data-visible' custom attribute to open and close the quick actions menu
  quickActions.addEventListener("click", () => {
    quickActionsMenu.toggleAttribute("data-visible");
  });

  // Close the container when clicking outside of it
  window.addEventListener("click", (event) => {
    if (!quickActions.contains(event.target)) {
      quickActionsMenu.removeAttribute("data-visible");
    }
  });

  document.querySelector(".actions-close-btn").addEventListener("click", () => {
    document.querySelector(".actions-modal").classList.remove("open");
  });

  document
    .querySelectorAll(".tab-wrapper > div")
    .forEach((tab) => (tab.style.display = "none"));

  document.querySelectorAll(".switch").forEach((switchBtn, index) => {
    switchBtn.addEventListener("click", () => {
      // Remove 'active' class from all switches
      document
        .querySelectorAll(".switch")
        .forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to the clicked switch
      switchBtn.classList.add("active");

      // Hide all tab contents
      document
        .querySelectorAll(".tab-wrapper > div")
        .forEach((tab) => (tab.style.display = "none"));

      // Show the corresponding tab based on index
      document.querySelector(`.tab-wrapper .tab-${index + 1}`).style.display =
        "block";
    });
  });

  // Initialize the first tab to be visible
  document.querySelector(".tab-wrapper .tab-1").style.display = "block";

  amButton.addEventListener("click", () => {
    amButton.setAttribute("data-checked", "true");
    pmButton.setAttribute("data-checked", "false");
  });

  pmButton.addEventListener("click", () => {
    pmButton.setAttribute("data-checked", "true");
    amButton.setAttribute("data-checked", "false");
  });

  document.querySelector(".actions-close-btn").addEventListener("click", () => {
    document.querySelector(".actions-modal").classList.remove("open");
  });

  

  stars.forEach((star) => {
      star.addEventListener('click', (e) => {
        e.stopPropagation()
        star.toggleAttribute('checked');
      })
  });
});
