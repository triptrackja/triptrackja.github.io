/* ==================== MENU NAV A SCOMPARSA ==================== */
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')
/* ========== MOSTRA MENU ========== */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}
/* ========== NASCONDI MENU ========== */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ==================== RIMUOVI MENU MOVILE ==================== */
const navLink = document.querySelectorAll('.nav_link')
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // Quando clicco su un link, il menu sparisce
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ==================== IMMAGINI SFONDO MOVIMENTO ==================== */
document.addEventListener('mousemove', move);
function move(e) {
    this.querySelectorAll('.move').forEach(layer => {
        const speed = layer.getAttribute('data-speed')
        const x = (window.innerWidth - e.pageX * speed) / 120
        const y = (window.innerHeight - e.pageY * speed) / 120
        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/* ==================== CAMBIO SFONDO HEADER ==================== */
function scrollHeader() {
    const header = document.getElementById('header')
    // Se lo scorrimento fatto è maggiore di 100vh allora il nav non è più trasparente
    if (this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ==================== SWIPER CAROUSEL ==================== */
let swiper = new Swiper(".carousel_container", {
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

/*=============== SHOW MODAL ===============*/
const modalViews = document.querySelectorAll(".popup_modal"),
    modalBtns = document.querySelectorAll(".popup_button"),
    modalCloses = document.querySelectorAll(".popup_modal-close")

let popup = function (modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        popup(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home_data, .home_info,
           .home_img, .C-home_img,
           .carousel_container,
           .informazioni_data, .informazioni_overlay,
           .footer_data, .footer_spiegazione, .calcola_forms,
           .risultato_bg`, {
    origin: 'top',
    interval: 100,
})

sr.reveal(`.informazioni_data, .calcola_img`, {
    origin: 'left',
})

sr.reveal(`.informazioni_img-overlay`, {
    origin: 'right',
    interval: 100,
})

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== CALCOLO COMBINATORIO ====================*/
const btn = document.getElementById("calcola-button");

btn.addEventListener('click', () => {
    const n = Number(document.getElementById("inserisci-n").value),
          k = Number(document.getElementById("inserisci-k").value),
          calcolo = document.getElementById("calcolo").value,
          tipo = document.getElementById("tipo").value;
    anagramma = new String();
    anagramma = String(document.getElementById("inserisci-anagramma").value);
    calcoloCombinatorio(n, k, anagramma, calcolo, tipo);
})

function calcoloCombinatorio(n, k, anagramma, calcolo, tipo) {
    let risultato;
    if (tipo === "Semplice") {
        switch (calcolo) {
            case "Disposizione":
                if (!n || !k) {
                    alert("NO N/K!!!");
                } else {
                    if (n <= k) {
                        alert("Valori inseriti errati, riprova");
                    } else {
                        risultato = n;
                        for (let i = 1; i < k; i++) {
                            risultato = risultato * (n - i);
                        }
                    }
                }
                break;
            case "Permutazione":
                if (!anagramma) {
                    alert("NO ANAGRAMMA!!!");
                } else {
                    risultato = permutazioneAnagramma(anagramma, tipo);
                    document.getElementById("risultato").innerHTML = risultato;
                }
                break;
            case "Combinazione":
                if (!n || !k) {
                    alert("NO N/K!!!");
                } else {
                    if (k >= n) {
                        alert("Valori inseriti in maniera errata, riprova");
                    } else {
                        risultato = (fattoriale(n) / (fattoriale(k) * fattoriale(n - k)));
                    }
                }
                break;
        }
    } else if (tipo === "Con Ripetizione") {
        switch (calcolo) {
            case "Disposizione":
                if (!n || !k) {
                    alert("NO N/K!!!")
                } else {
                    if (k >= n) {
                        alert("Valori inseriti in maniera errata, riprova");
                    } else {
                        risultato = Math.pow(n, k);
                    }
                }
                break;
            case "Permutazione":
                if (!anagramma) {
                    alert("NO ANAGRAMMA!!!");
                } else {
                    risultato = permutazioneAnagramma(anagramma, tipo);
                }
                break;
            case "Combinazione":
                if (!n || !k) {
                    alert("NO N/K!!!");
                } else {
                    if (k >= n) {
                        alert("Valori inseriti in maniera errata, riprova");
                    } else {
                        let somma = n + k - 1;
                        risultato = Number(fattoriale(somma) / (fattoriale(k) * fattoriale(somma - k)));
                    }
                }
                break;
        }
    }
    document.getElementById("risultato").innerHTML = risultato;
}

function fattoriale(a) {
    if (a == 0)
        return 1;
    return (a * fattoriale(a - 1));
}

function permutazioneAnagramma(anagramma, tipo){
    let lettere = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
        occorrenze = [],
        denominatore = 1;

    for(let i = 0; i < lettere.length; i++){
        occorrenze[i] = 0;
    }
    for(let i = 0; i < lettere.length; i++){
        for(let j = 0; j < anagramma.length; j++){
            if(anagramma.charAt(j) === lettere[i]){
                occorrenze[i]++;
            }
        }
    }
    for(let i = 0; i < occorrenze.length; i++){
        if(tipo === "Semplice"){
            if(occorrenze[i] > 1){
                alert("L'anagramma inserito non è una disposizione semplice, riprova");
                return -1;
            }
        }else{
            denominatore = denominatore * fattoriale(occorrenze[i]);
        }
    }
    return (fattoriale(Number(anagramma.length))/denominatore);
}