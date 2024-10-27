// const product_api = "https://fakestoreapi.com/products";
const namesArray = JSON.parse(localStorage.getItem("names")) || [];

// const inputs = document.getElementById("inputs");
const inputs = document.querySelector("#inputs");
const show_btn = document.querySelector(".btn");
const product_list = document.querySelector(".list_items");

function notification() {
  alert("You are stroing in local storage");
  getValue();
  const list_items = document.querySelector(".list_items");
  namesArray.forEach((el, i) => {
    const div = document.createElement("div");
    div.setAttribute("class", "names_container");
    const name = document.createElement("h2");
    name.textContent = el.name;
    div.append(name);
    list_items.append(div);
  });
  const inputs = (document.querySelector("#inputs").value = "");
}

function getValue() {
  const inputs = document.querySelector("#inputs").value;
  const user = {
    name: inputs,
  };
  namesArray.push(user);
  localStorage.setItem("names", JSON.stringify(namesArray));
  console.log(user);
}

// addEventListener(type, listener)

show_btn.addEventListener("click", notification);

// show_btn.addEventListener("click", () => {
//   console.log("My button is working");
// });

// show_btn.addEventListener("dblclick", () => {
//   console.log("My button is working");
// });