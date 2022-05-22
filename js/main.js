// ===================== MOBILE TOGGLE MENU =====================

const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")
const toggleDark = document.getElementById("")

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    });
}

if(navClose) {
    navClose.addEventListener('click',() => {
        navMenu.classList.remove("show-menu");
    })
}


// ===================== TOGGLE THEME =====================

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark';
const iconTheme = 'uil-sun'

// previously selected theme(if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//get current theme that interface has by validating dark-theme class
const getCurrentTheme = () => document.documentElement.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//validate if user previously chose a topic
if(selectedTheme){
    //if validation fulfilled, ask what the issue was to know if activated/deactivated dark theme
    document.documentElement.classList[selectedTheme ==='dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// ===================== activate/deactivate theme manually w button =====================
themeButton.addEventListener('click',()=>{
    //add/remove dark/icon theme
    document.documentElement.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //save theme and current icon user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
});

// ===================== SROLL SECTIONS ACTIVE LINK =====================

const sections = document.querySelectorAll('section[id]');
console.log(sections);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        // console.log('sectionId = ' + sectionId);
        // console.log('sectionHeight = ' + sectionHeight);
        // console.log('sectionTop = ' + sectionTop);


        if(scrollY > sectionTop && scrollY <=  sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


// ===================== SROLL SECTIONS ACTIVE LINK =====================

function scrollHeader() {
    const nav = document.getElementById("header");
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// ===================== ACCORDIAN SKILLS =====================

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__headers');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skill__content skills__close'
    }

    if(itemClass == 'skill__content skills__close') {
        this.parentNode.className = 'skill__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});
