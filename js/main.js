// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    // Toggle nav list and burger class
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
const elements = document.querySelectorAll(".text-border");

for (const element of elements) {
  element.addEventListener("mouseenter", () => {
    element.classList.add("active");
  });

  element.addEventListener("mouseleave", () => {
    element.classList.remove("active");
  });
}
