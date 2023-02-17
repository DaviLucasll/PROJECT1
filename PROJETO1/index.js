const lightCourseBtn = document.querySelector("#light-btn")
const cloudCourseBtn = document.querySelector("#cloud-btn")
const skyCourseBtn = document.querySelector("#sky-btn")
lightCourseBtn.addEventListener("click",()=>{
    const lightCourseSlide = document.querySelector("#course-slide")
    lightCourseSlide.innerHTML = `
        <h1>Comece a programar do zero gratuitamente</h1>
        <p>Você vai encontrar aulas para dominar HTML, CSS, JavaScript, HTTP, Forms, Ferramentas, DOM e muito mais.</p>
        <button>QUERO CONHECER</button>
        `
})

cloudCourseBtn.addEventListener("click",()=>{
    const lightCourseSlide = document.querySelector("#course-slide")
    lightCourseSlide.innerHTML = `
    <h1>Comece a programar do zero gratuitamente</h1>
    <p>Você vai encontrar aulas para dominar HTML, CSS, JavaScript, HTTP, Forms, Ferramentas, DOM e muito mais.</p>
    <button>QUERO CONHECER</button>
    `
})

skyCourseBtn.addEventListener("click",()=>{
    const lightCourseSlide = document.querySelector("#course-slide")
    lightCourseSlide.innerHTML = `
    <h1>Comece a programar do zero gratuitamente</h1>
    <p>Você vai encontrar aulas para dominar HTML, CSS, JavaScript, HTTP, Forms, Ferramentas, DOM e muito mais.</p>
    <button class="course-slide-btn">QUERO CONHECER</button>
    `
})