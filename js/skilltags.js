const onboardingForm = document.getElementById('onboardingForm');

    // Prevent form from submitting on Enter key
    onboardingForm.addEventListener('submit', function (e) {
      e.preventDefault();
    });

    // Function to create a tag element
    function createTag(tagText, tagContainer, tagInput) {
      const tag = document.createElement('span');
      tag.classList.add('tag', 'p-2', 'bg-base', 'rounded-3', 'text-sm');
      tag.textContent = tagText;

      const close = document.createElement('span');
      close.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='16px' height='16px' viewBox='-0.5 0 25 25' fill='none'> <path d='M3 21.32L21 3.32001' stroke='#000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/> <path d='M3 3.32001L21 21.32' stroke='#000000' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>";
      close.classList.add('close', 'ms-2');
      close.style.cursor = 'pointer';

      // Add the remove tag functionality
      close.addEventListener('click', function () {
        tag.remove();
      });

      tag.appendChild(close);
      tagContainer.insertBefore(tag, tagInput);
    }

    // Handle multiple tag inputs
    const tagInputs = document.querySelectorAll('.tag-input');

    tagInputs.forEach(function (tagInput) {
      const tagContainer = tagInput.closest('.tag-container'); // Get the closest container for each input

      tagInput.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          const tagText = tagInput.value.trim();
          if (tagText !== '') {
            createTag(tagText, tagContainer, tagInput);
            tagInput.value = ''; // Clear the input
          }
        }
      });
    });