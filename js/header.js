
//Event - signIn button clicked it will open sign in modal dialog
function signInClicked() {
    var modal = document.getElementById("signInModal");
    modal.style.display = "block";
};

//Event- SignUp button clicked it will open sign up modal
function signUpClicked() {
    var modal = document.getElementById("signUpModal");
    modal.style.display = "block";
};


//Event -if close button is clicked it will close the opened modal
function closeModal() {
    var modal = document.getElementsByClassName("modal");
    Array.prototype.forEach.call(modal, function (element) {
        element.style.display = "none";
    })
};

//Event- when model opened and if clicked on the side of the modal then it the opened dialog will be closed.
window.onclick = function (event) {
    var modal = document.getElementsByClassName("modal");
    Array.prototype.forEach.call(modal, function (element) {
        if (event.target == element) {
            element.style.display = "none";
        }
    });
};

//Event sign up clicked in the sign in modal this function will be called and will close sign in modal and open sign up modal
function signUpLinkClicked() {
    var modal = document.getElementById("signInModal");
    modal.style.display = "none";
    signUpClicked();

}