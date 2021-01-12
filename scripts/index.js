function showSignUpModal() {
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    var modal = document.getElementById("signup-modal");
    modal.style.display = "block";
}

function hideSignUpModal() {
    var modal = document.getElementById("signup-modal");
    modal.style.display = "none";
}