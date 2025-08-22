const button = document.getElementById("button");
const text = document.getElementById("text");
const container = document.getElementById("container");
const newBox = document.getElementById("newBox");

button.addEventListener("click", (e) => {
  e.preventDefault();              
  button.style.display = "none";  
  text.style.display = "none";     
  container.classList.add("glass");

  newBox.style.display = "flex";
});