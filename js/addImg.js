function getImage() {
    document.getElementById("upfile").click();
  }


  function sub(input) {
    if (input.files && input.files[0]) {
      const file = input.files[0];

      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }

      const reader = new FileReader();

      reader.onload = function (e) {
        document.getElementById("addImgBtn").src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

