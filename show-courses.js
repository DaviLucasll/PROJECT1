const skyCourseBtn = document.querySelector("#sky-btn")
const sunCourseBtn = document.querySelector("#sun-btn")
const starsCourseBtn = document.querySelector("#stars-btn")
skyCourseBtn.addEventListener("click",()=>{
    const CourseSlide = document.querySelector("#course-slide")
    CourseSlide.innerHTML = `
    <div class="course-slide-left">
        <h1 class="course-slide-headline">Comece a programar do zero gratuitamente</h1>
        <p class="course-slide-description">
            Aqui você tem acesso gratuito a uma trilha planejada e pensada com carinho pelos melhores professores desse Brasil, para aqueles que estão iniciando na carreira de desenvolvimento web e querem aprender uma base sólida.
        </p>
        <button class="course-slide-btn">QUERO CONHECER</button>
    </div>
    <div class="course-slide-right">
        <img src="coursesIllustrations/cloudIllustration.JPG" alt="Cloud Image" class="course-img">
    </div>
    `
})

sunCourseBtn.addEventListener("click",()=>{
    const CourseSlide = document.querySelector("#course-slide")
    CourseSlide.innerHTML = `
    <div class="course-slide-left">
        <h1 class="course-slide-headline">Conquiste a sua primeira vaga</h1>
        <p class="course-slide-description">
            Com o programa Sun você tem acesso às melhores aulas de programação para web, pensadas para as pessoas que querem sair do absoluto ZERO e conquistar o PRIMEIRO EMPREGO.
        </p>
        <button class="course-slide-btn">QUERO CONHECER</button>
    </div>
    <div class="course-slide-right">
        <img src="coursesIllustrations/sunIllustration.jpg" alt="Sun Image" class="course-img">
    </div>
    `
})

starsCourseBtn.addEventListener("click",()=>{
    const CourseSlide = document.querySelector("#course-slide")
    CourseSlide.innerHTML = `
    <div class="course-slide-left">
        <h1 class="course-slide-headline">Alcance o nível STARS como dev FrontEnd</h1>
        <p class="course-slide-description">
            O programa Stars é voltado para aqueles que já estão na área mas desejam alcançar o nível de estrelas como devsenvolvedores. Especialização em ReacjtJS, para aqueles que querem brilhar nos céus do FrontEnd.
        </p>
        <button class="course-slide-btn">QUERO CONHECER</button>
    </div>
    <div class="course-slide-right">
        <img src="coursesIllustrations/skyIllustration.jpg" alt="Sky Image" class="course-img">
    </div>
    `
})