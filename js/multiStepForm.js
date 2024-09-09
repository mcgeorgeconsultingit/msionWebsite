document.addEventListener("DOMContentLoaded", () => {
    const socialHandles = document.querySelectorAll(".social-icons div");
    const linkInputs = document.querySelectorAll(".link_input");
    const submitBtn = document.querySelector(".btn-primary");
    const nameInput = document.querySelector("input[name='Name']");
    const emailInput = document.querySelector("input[name='email']");
    const progressBar = document.getElementById("progress");

    document.querySelector(".navigation-buttons .btn.bg-base").style.display = "none";

  
    let currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab
  
    function showTab(n) {
      const tabs = document.querySelectorAll(".tab");
      tabs.forEach((tab, index) => {
        tab.classList.remove("active");
        if (index === n) {
          tab.classList.add("active");
        }
      });
  
      if (n == 0) {
        document.querySelector(".navigation-buttons .btn.bg-base").style.display = "none";
      } else {
        document.querySelector(".navigation-buttons .btn.bg-base").style.display = "inline";
      }
      if (n == tabs.length - 1) {
        submitBtn.textContent = "Submit";
      } else {
        submitBtn.textContent = "Continue";
      }
  
      updateProgressBar();
    }
  
    function nextPrev(n) {
      const tabs = document.querySelectorAll(".tab");
      if (n === 1 && !validateForm()) {
        return false;
      }
  
      currentTab += n;
      if (currentTab >= tabs.length) {
        if (validateForm()) {
            emailInput.preventDefault
          window.location.href = "profile.html";
        }
        return false;
      }
      showTab(currentTab);
    }
  
    function validateForm() {
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return name !== "" && emailRegex.test(email);
    }
  
    function updateSubmitButtonState() {
      submitBtn.disabled = !validateForm();
    }
  
    function updateProgressBar() {
      const tabs = document.querySelectorAll(".tab");
      const percentage = ((currentTab + 1) / tabs.length) * 100;
      progressBar.style.width = `${percentage}%`;
      progressBar.setAttribute("aria-valuenow", percentage);
      document.querySelector("label[for='progress']").textContent = `${Math.round(percentage)}%`;
    }
  
    submitBtn.addEventListener("click", function (event) {
      if (currentTab >= document.querySelectorAll(".tab").length - 1 && !validateForm()) {
        event.preventDefault();
      } else {
        event.preventDefault();
        nextPrev(1);
      }
    });
  
    document.querySelector(".navigation-buttons .btn.bg-base").addEventListener("click", function (event) {
      nextPrev(-1);
    });
  
    nameInput.addEventListener("input", updateSubmitButtonState);
    emailInput.addEventListener("input", updateSubmitButtonState);
  
    updateSubmitButtonState();
  
    function toggleActiveLink(event) {
      const clickedId = event.currentTarget.id;
      event.currentTarget.classList.toggle("active");
      document.querySelector(`.link_input#${clickedId}`).classList.toggle("active");
    }
  
    socialHandles.forEach((handle) => {
      handle.addEventListener("click", toggleActiveLink);
    });
  });
  