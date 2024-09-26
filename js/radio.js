document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.radio-input').forEach(input => {
        input.addEventListener('click', function(e) {
            e.stopPropagation()
            if (this.checked) {
                this.checked = true; // Select the button
            } else {
                this.checked = false; // Deselect the button
            }
        });
    });

});
