// const btnListRef = document.querySelector(".js-tags");
// let selectedTag = null;

// btnListRef.addEventListener("click", onBtnListRefClick);

// function onBtnListRefClick(evt) {
//   if (evt.target.nodeName !== "BUTTON") {
//     return;
//   }
//   const currentActiveButton = document.querySelector(".is-active");

//   //   if (currentActiveButton) {
//   //     currentActiveButton.classList.remove("is-active");
//   //   }

//   currentActiveButton?.classList.remove("is-active");
//   const nextActiveBtn = evt.target;
//   nextActiveBtn.classList.add("is-active");
//   selectedTag = nextActiveBtn.dataset.value;
//   console.log(selectedTag);
// }

const btnListRef = document.querySelector(".js-tags");
const selectedTags = new Set();

btnListRef.addEventListener("click", onBtnListRefClick);

function onBtnListRefClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }

  const btn = evt.target;
  const tag = btn.dataset.value;
  const isActive = btn.classList.contains("is-active");

  if (isActive) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  btn.classList.toggle("is-active");

  console.log(selectedTags);
}
