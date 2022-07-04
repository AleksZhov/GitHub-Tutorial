const container = document.querySelector(".js-container");

container.addEventListener("click", onClick);
function onClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  console.log(evt);
}

const addJsBtn = document.querySelector(".js-add-btn");
addJsBtn.addEventListener("click", addBtn);

let labelCounter = 6;

function addBtn() {
  const btn = document.createElement("button");
  btn.textContent = `Button ${labelCounter}`;
  btn.type = "button";

  container.appendChild(btn);
  labelCounter += 1;
}
