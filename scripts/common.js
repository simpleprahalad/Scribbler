function generateHeader() {
    var template = ` <div class="header">
    <div class="title-container">
        <div class="title">ScriBBler</div>
        <p class="sub-title">Explore,  Imagine,  Create</p>
    </div>

    <div class="btn-container">
        <button class="blue-button" onclick="showSignUpModal()">Sign Up</button>
        <button class="blue-button" onclick="showSignInModal()">Sign In</button>
    </div>
    </div> `;

    document.getElementById('page-header').innerHTML = template;
    generateSignUpModal();
    generateSignInModal();
}

function generateSignUpModal() {
    var template = `    <!-- Signup Modal -->
        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <span onclick="hideSignUpModal()"" class="close">
                    <i class="fa fa-times"></i>
                </span>
                <h2>Get Started</h2>
            </div>
            <hr/>
            <form>
                <label for="fullname" class="label-text">Name</label>
                <input type="text" id="fullname" placeholder="Enter your name" required>
                <label for="username" class="label-text">Username</label>
                <input type="text" id="username" placeholder="Enter your username" required>
                <label for="password" class="label-text">Password</label>
                <input type="password" id="password" placeholder="Enter your password" required>
                <label for="confirmpassword" class="label-text">Confirm Password</label>
                <input type="password" id="confirm_password" placeholder="Re-enter your password" required>
                <button type="submit" onclick="signup()" class="green-btn">Sign Up</button>
            </form>
        </div>
    </div>`;
    document.getElementById('signup-modal').innerHTML = template;
}

function generateSignInModal() {
var template = `<div class="modal-content">
    <div class="modal-header">
        <span onclick="hideSignInModal()"" class="close">
            <i class="fa fa-times"></i>
        </span>
        <h2>Welcome Back!</h2>
    </div>
    <hr/>
    <form>
        <label for="username" class="label-text">Username</label>
        <input type="text" id="username" placeholder="Enter your username" required>
        <label for="password" class="label-text">Password</label>
        <input type="password" id="password" placeholder="Enter your password" required>
        <button type="submit" onclick="signin()" class="green-btn">Sign In</button>
    </form>
    <p class=bottom-banner>Not a member?
        <span onclick="handleSignUpClick()" class=signup>Sign Up
        </span>
    </p>
    </div>`
    document.getElementById('signin-modal').innerHTML = template;
}

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
