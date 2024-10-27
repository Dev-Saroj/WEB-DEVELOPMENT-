const userArray = [];

const signupBtn = document.getElementById("sign-up-btn");
signupBtn.addEventListener("click", signup);

function signup() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // alert for empty field
  if (name === "" || email === "" || password === "") {
    alert("Please fill the details");
  } else {
    const user = { name, email, password };
    userArray.push(user);
    // Save to the local storage
    localStorage.setItem("users", JSON.stringify(userArray));

    alert("Sign up successfull !!");
  }

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  window.location.href = "login.html";
}