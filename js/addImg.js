function getFile() {
    document.getElementById("upfile").click();
  }
function getFile2() {
    document.getElementById("upfile2").click();
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

  function sub2(input) {
    if (input.files && input.files[0]) {
      const file = input.files[0];

      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }

      const reader = new FileReader();

      reader.onload = function (e) {
        document.getElementById("addImgBtn-2").src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }