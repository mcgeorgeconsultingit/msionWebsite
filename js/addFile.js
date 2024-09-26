function triggerFileInput(inputId) {
    document.getElementById(inputId).click();
  }

  // Reusable function to handle file input change and validate file format
  function getFile(input, filenameId) {
    const file = input.files[0];
    const validFormats = ['image/jpeg', 'image/png', 'application/pdf', 'application/msword'];

    if (file) {
      const filenameDisplay = document.getElementById(filenameId);
      
      // Check if file is of valid type
      if (validFormats.includes(file.type)) {
        // Display the file name in the <p> element
        filenameDisplay.textContent = file.name;
      } else {
        // Show error message if file format is invalid
        filenameDisplay.textContent = 'Invalid file format. Please upload a PDF, DOC, or image.';
        // Optionally reset the file input
        input.value = '';
      }
    }
  }