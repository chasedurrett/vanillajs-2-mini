document.querySelector("form").addEventListener("submit", addToDo);

function addToDo(event) {
  event.preventDefault();
  const item = document.createElement("li");
  item.innerText = document.getElementById("item").value;
  document.addEventListener("click", completeToDo);
  const btn = document.createElement("button");
  btn.innerText = "x";
  document.addEventListener("click", removeToDo);
  item.append(btn);
  const list = document.querySelector("ul");
  list.appendChild(item);
}
function removeToDo(event) {
  event.preventDefault();
  event.target.parentNode.remove(item);
}
function completeToDo(event) {
  const value = event.target.getAttribute("aria-checked");
  if (value !== "true") {
    event.target.setAttribute("aria-checked", "true");
  } else {
    event.target.setAttribute("aria-checked", "false");
  }
}
