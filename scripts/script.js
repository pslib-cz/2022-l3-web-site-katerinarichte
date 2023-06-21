document.querySelector("[data-burger]").addEventListener("click", () => {
  document.querySelector("[data-burger]").classList.toggle("active");
  document.querySelector("[data-menu]").classList.toggle("active");
  document.querySelector("[data-body]").classList.toggle("lock");
});

window.addEventListener("resize", () => {
  document.querySelector("[data-burger]").classList.remove("active");
  document.querySelector("[data-menu]").classList.remove("active");
  document.querySelector("[data-body]").classList.remove("lock");
});
