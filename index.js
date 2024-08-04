let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");

const openmodal = () => {
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
}

const closemodal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
}