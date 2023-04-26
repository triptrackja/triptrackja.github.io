/* ==================== HEADER ==================== */
const navMenu = document.getElementById('navbar-menu'),
    navOpen = document.getElementById('open-btn'),
    navClose = document.getElementById('close-btn')

if(navOpen){
    navOpen.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

const scrollHeader = () => {
    const header = document.getElementById('header')
    if(this.scrollY >= 50){
        header.classList.add('bg-header')
    }else{
        header.classList.remove('bg-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/* ==================== APP ==================== */
function changeImage(fileName){
    let img = document.querySelector('#changeImg')
    img.setAttribute('src', fileName)
}

/* ==================== STRENGTH ==================== */
let swiper = new Swiper(".strength_container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/* ==================== UP ==================== */
const up = () =>{
    const upBtn = document.getElementById('up')
    if(this.scrollY >= 350){
        upBtn.classList.add('show-up')
    }else{
        upBtn.classList.remove('show-up')
    }
}
window.addEventListener('scroll', up)


/* ==================== OTHER ==================== */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.navbar_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home_text,
           .home_img,
           .strength_container,
           .about_container,
           .team_container,
           .app_container,
           .footer_content`, {
    origin: 'top',
    interval: 100,
})
