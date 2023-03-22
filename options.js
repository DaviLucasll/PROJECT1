const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuList = document.querySelector(".mobile-menu-list");
const mobileListItems = document.quer;
mobileMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
  mobileMenuList.classList.toggle("open");
  const mobileMenuOptions = document.querySelector(".mobile-menu-list");
  console.log(mobileMenuOptions);
  mobileMenuOptions.classList.toggle("display-flex");
});
