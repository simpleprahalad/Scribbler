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

function showSignInModal() {
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    var modal = document.getElementById("signin-modal");
    modal.style.display = "block";
}

function hideSignInModal() {
    var modal = document.getElementById("signin-modal");
    modal.style.display = "none";
}

function handleSignUpClick() {
    hideSignInModal();
    showSignUpModal();
}

function navigateToBlogPost() {
    location.href = "html/postslist.html"
}


function showCreatePostModal() {
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    var modal = document.getElementById("create-post-modal");
    modal.style.display = "block";
}

function hideCreatePostModal() {
    var modal = document.getElementById("create-post-modal");
    modal.style.display = "none";
}

