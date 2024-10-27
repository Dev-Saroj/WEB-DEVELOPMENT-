const user = JSON.parse(localStorage.getItem("users")) || [];

const logInBtn = document.getElementById("login-btn");
logInBtn.addEventListener("click", login);

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(user, user[0].email, user[0].password);
  console.log(email, password);

  if (user && user[0].email === email && user[0].password === password) {
    alert("Login successfull welcome," + user[0].name);
  } else {
    alert("Wrong email or password");
  }
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  window.location.href = "index.html";
}