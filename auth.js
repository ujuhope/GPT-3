function signIn(event) {
    event.preventDefault();
  let formHeader = document.querySelector("h1");
  formHeader.innerHTML = `Sign In`;
  let nameInput = document.getElementById("name-input");
  nameInput.style.display = "none"
}

function signup(event) {
    event.preventDefault();
  let formHeader = document.querySelector("h1");
  formHeader.innerHTML = `Sign Up`;
  let nameInput = document.getElementById('name-input')
  nameInput.style.display = "block"
}

let signinText = document.querySelector(".authentication-signin-btn");
signinText.addEventListener("click", signIn);

let signupText = document.querySelector(".authentication-signup-btn");
signupText.addEventListener("click", signup);
