const lightCourseBtn = document.querySelector("#light-btn")
const cloudCourseBtn = document.querySelector("#cloud-btn")
const skyCourseBtn = document.querySelector("#sky-btn")
lightCourseBtn.addEventListener("click",()=>{
    const lightCourseSlide = document.querySelector("#course-slide")
    lightCourseSlide.innerHTML = `
    <div class="course-slide-left">
        <h1 class="course-slide-headline">Comece a programar do zero gratuitamente</h1>
        <p class="course-slide-description">
            Você vai encontrar aulas para dominar HTML, CSS, JavaScript, HTTP, Forms, Ferramentas, DOM e muito mais.
        </p>
        <button class="course-slide-btn">QUERO CONHECER</button>
    </div>
    <img src="" alt=""> 
    `
})

cloudCourseBtn.addEventListener("click",()=>{
    const lightCourseSlide = document.querySelector("#course-slide")
    lightCourseSlide.innerHTML = `
    <div class="course-slide-left">
        <h1 class="course-slide-headline">Comece a programar do zero gratuitamente</h1>
        <p class="course-slide-description">
            Você vai encontrar aulas para dominar HTML, CSS, JavaScript, HTTP, Forms, Ferramentas, DOM e muito mais.
        </p>
        <button class="course-slide-btn">QUERO CONHECER</button>
    </div>
    <img src="" alt="">
    `
})

skyCourseBtn.addEventListener("click",()=>{
    const lightCourseSlide = document.querySelector("#course-slide")
    lightCourseSlide.innerHTML = `
    <div class="course-slide-left">
        <h1 class="course-slide-headline">Comece a programar do zero gratuitamente</h1>
        <p class="course-slide-description">
            Você vai encontrar aulas para dominar HTML, CSS, JavaScript, HTTP, Forms, Ferramentas, DOM e muito mais.
        </p>
        <button class="course-slide-btn">QUERO CONHECER</button>
    </div>
    <img src="" alt="">
    `
})