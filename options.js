const mobileMenu = document.querySelector(".mobile-menu")
mobileMenu.addEventListener("click", ()=>{
    mobileMenu.classList.toggle("open")
    const mobileMenuOptions = document.querySelector(".mobile-menu-list")
    console.log(mobileMenuOptions)
    mobileMenuOptions.classList.toggle("display-flex")
})