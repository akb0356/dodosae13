const btn = document.querySelectorAll(".button");
console.log(btn);
btn.forEach((button) => {
  button.addEventListner("click", () => {
    button.nextElementSibling.classList.toggle("show");
  });
});
