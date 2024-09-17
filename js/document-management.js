document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("[name='tab-select']");
    const list = document.querySelector(".documents-view");
    const quickActions = document.querySelector('.quick-actions');
    const quickActionsMenu = document.querySelector('.quick-actions-menu');
    const gradeBtn = document.querySelector('#gradeTrigger');
    // const selectAllButton = document.querySelector('.quick-actions-menu');
    

//  Both tabs are actually rendered but I used css classes to hide 
//  or display the documents set depending on which category is clicked

    Array.from(tabs).forEach(tab => {
        tab.addEventListener('click',(e) => {
            list.classList.remove('admin', 'applicants');
            list.classList.add(tab.id);
            quickActionsMenu.classList.remove('admin', 'applicants')
            quickActionsMenu.classList.add(tab.id)
        })
    })

//  I used the 'data-visible' custom attribute to open and close the quick actions menu
    quickActions.addEventListener('click', () => {
        quickActionsMenu.toggleAttribute('data-visible');
    })

    // Close the container when clicking outside of it
window.addEventListener('click', (event) => {
    if (!quickActions.contains(event.target)) {
      quickActionsMenu.removeAttribute('data-visible');
    }
  });


})