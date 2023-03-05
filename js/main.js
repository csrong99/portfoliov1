// ===================== MOBILE TOGGLE MENU =====================

const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")
const toggleDark = document.getElementById("")

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
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
if (selectedTheme) {
    //if validation fulfilled, ask what the issue was to know if activated/deactivated dark theme
    document.documentElement.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// ===================== activate/deactivate theme manually w button =====================
themeButton.addEventListener('click', () => {
    //add/remove dark/icon theme
    document.documentElement.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //save theme and current icon user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
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


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
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
    if (this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// ===================== ACCORDIAN SKILLS =====================

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__headers');

function toggleSkills() {
    let itemClass = this.parentNode.classList;
    console.log(itemClass);

    for (i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = 'skills__content skills__close'
    }

    if (itemClass == 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }

    if (itemClass.contains('skills__content') &&
        itemClass.contains('skills__close')) {
        this.parentNode.classList.remove('skills__close');
        this.parentNode.classList.add('skills__open');
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills);
});

// ===================== QUALIFICATION TABS =====================

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })

        target.classList.add('qualification__active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })

        tab.classList.add('qualification__active')

        // ScrollReveal().reveal('.qualification__active', { reset: true });
    })
})


// ===================== SKILLS SPHERE =====================
const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C++', 'Spring Boot',
    'Python', 'Java', 'git',
    'django', 'Node.js', 'OpenCV',
    'Angular', 'MySQL', 'jQuery', 'quickFIX',
    'RabbitMQ', 'Webstreamer', 'SignalR'
];

// var tagCloud = TagCloud('.content', myTags);

let w = window.innerWidth;
let radius = 200;

if (w < 768) {
    radius = (window.innerWidth - 60) / 2.0;
} else if (w >= 768 && w < 1024) {
    radius = 300;
} else if (w >= 1024 && w < 1280) {
    radius = 300;
}

var tagCloud = TagCloud('.content', myTags, {

    // radius in px
    radius: radius,

    // animation speed
    // slow, normal, fast
    maxSpeed: 'fast',
    initSpeed: 'fast',

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true

});

function showMagic() {

    if (document.getElementById("skill-list").classList.contains("hidden")) {
        document.getElementById("skill-list").classList.remove("hidden")
    } else {
        document.getElementById("skill-list").classList.add("hidden")
    }

    if (document.getElementById("skill-sphere").classList.contains("hidden")) {
        document.getElementById("skill-sphere").classList.remove("hidden")
    } else {
        document.getElementById("skill-sphere").classList.add("hidden")
    }
}




// ===================== CONTACT FORM =====================

$(document).ready(function () {

    // When the form is submitted
    // $('#contact-form').submit(function(e) {
    //     e.preventDefault(); // prevent the form from submitting normally
    //     console.log($(e.target));
    //     var isValid = $(e.target).validate();


    //     console.log("isValid: ", isValid);
    //     // Send a POST request to the server
    //     $.post('https://formsubmit.co/el/vixohe', $(this).serialize(), function(response) {
    //         // Show the success pop-up
    //         $('#success-popup').show();

    //         // Hide the pop-up when the user clicks the "Close" button
    //         $('#close-popup').click(function() {
    //             $('#success-popup').hide();
    //         });

    //     });

    // });

    // form.addEventListener('submit', () => {
    //     e.preventDefault();
    //     $('#success-popup').show();
    //     setTimeout(() => form.submit(), 2000);
    // }
    // );

    $('#contact-form').submit(function (e) {
        e.preventDefault(); // prevent the form from submitting normally
        console.log($(e.target));
        var isValid = $(e.target).validate();


        console.log("isValid: ", isValid);
        // Send a POST request to the server
        $.post('https://formsubmit.co/el/vixohe', $(this).serialize(), function (response) {
            // Show the success pop-up
            $('#success-popup').show();

            // Hide the pop-up when the user clicks the "Close" button
            $('#close-popup').click(function () {
                $('#success-popup').hide();
            });

        });

    });

});

// ===================== SCROLLREVEAL JS =====================


var slideDown = {
    distance: '60px',
    origin: 'top',
    opacity: 0,
}

var slideLeft = {
    distance: '60px',
    origin: 'left',
    opacity: 0,
    interval: 1000,
}


var slideRight = {
    distance: '60px',
    origin: 'right',
    opacity: 0,
    interval: 1000,
}

var slideUp = {
    distance: '60px',
    origin: 'bottom',
    opacity: 0,
    interval: 1000,
}

// var slideDownWithDelay100 = {
//     distance: '60px',
//     origin: 'top',
//     opacity: 0,
//     delay: 100,
// }

// var slideDownWithDelay200 = {
//     distance: '60px',
//     origin: 'top',
//     opacity: 0,
//     delay: 200,
// }

// var slideDownWithDelay300 = {
//     distance: '60px',
//     origin: 'top',
//     opacity: 0,
//     delay: 300,
// }

ScrollReveal({
    distance: '60px',
    origin: 'top',
    duration: 2400,
    // interval: 400,
});

if (window.innerWidth >= 768) {
    ScrollReveal().reveal('#header .a_sr', { interval: 400 });
}

// ScrollReveal().reveal('#landing .home__title', slideDownWithDelay100);
// ScrollReveal().reveal('#landing .home__subtitle', slideDownWithDelay200);
// ScrollReveal().reveal('#landing .home__description', slideDownWithDelay300);
ScrollReveal().reveal('#landing .home__social-icon', { interval: 400 });
ScrollReveal().reveal('#landing .home__data *', { interval: 600 });


ScrollReveal().reveal('#about-me .a_sr', { interval: 400 });
// ScrollReveal().reveal('#about-me .title', { interval: 500 });
// ScrollReveal().reveal('#about-me .subtitle', {delay: 500, interval: 500 });
// ScrollReveal().reveal('#about-me .about-me__content', {delay: 500, interval: 500 });
// ScrollReveal().reveal('#about-me .subtitle', {delay: 500, interval: 500 });

ScrollReveal().reveal('#skills .a_sr', { interval: 400 });
// ScrollReveal().reveal('#skills .title', { interval: 500 });
// ScrollReveal().reveal('#skills .subtitle', { interval: 1000 });


ScrollReveal().reveal('#projects .a_sr', { interval: 400 });

ScrollReveal().reveal('#qualifications .a_sr', { interval: 400 });
ScrollReveal().reveal('#contact-me .a_sr', { interval: 400 });
// ScrollReveal().reveal('#projects .featured__project .project-content', slideUp);

// ScrollReveal().reveal('#projects .featured__project .project-content .project-overline', { interval: 500 });
// ScrollReveal().reveal('#projects .featured__project .project-content .project-title', { interval: 800 });
// ScrollReveal().reveal('#projects .featured__project .project-content .project-description', { interval: 1100 });
// ScrollReveal().reveal('#projects .featured__project .project-content .project-tech-list', { interval: 1400 });
// ScrollReveal().reveal('#projects .featured__project .project-content .project-links', { interval: 1700 });
// ScrollReveal().reveal('#projects .featured__project:nth-of-type(2n+1) .project-image', slideDown);
// ScrollReveal().reveal('#projects .featured__project .project-image', slideRight);