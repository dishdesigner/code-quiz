// TIMER FUNCTION *********************
function countdown() {
    var timeLeft = 5;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}

// DATA ATTRIBUTE DISPLAY FUNCTION *********************
container.addEventListener("click", function(event) {
    var element = event.target; // could make this any element
    if (element.matches(".box")) { // ensure element type
        var state = element.getAttribute("data-state"); // must be in HTML: data-state="hidden"
        if (state === "hidden") {
            element.textContent = element.dataset.number; // must be in HTML: data-number="1"
            element.dataset.state = "visible"; // anything after "data-" can be found with "dataset."
        } else {
            element.textContent= ""; // element still in DOM, just empty
            element.setAttribute("data-state", "hidden")
        }
    }
});

// LOCAL STORAGE READING / WRITING *********************
renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type); // set CSS class
}

function renderLastRegistered() {
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");

  if (!email || !password) { // if no local storage, cancel
    return;
  }
  userEmailSpan.textContent = email; // change HTML display content
  userPasswordSpan.textContent = password;
}
// EVENT LISTENER - CLICK SIGNUP
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") { // form error handling
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    localStorage.setItem("email", email); // successful submit writes to local storage
    localStorage.setItem("password", password);
    renderLastRegistered(); // display submission
  }
});


// TIMER FUNCTION *********************
// TIMER FUNCTION *********************
// TIMER FUNCTION *********************
// TIMER FUNCTION *********************
// TIMER FUNCTION *********************
// TIMER FUNCTION *********************