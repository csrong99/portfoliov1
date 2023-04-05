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

// $(document).ready(function () {

//     // When the form is submitted
//     // $('#contact-form').submit(function(e) {
//     //     e.preventDefault(); // prevent the form from submitting normally
//     //     console.log($(e.target));
//     //     var isValid = $(e.target).validate();


//     //     console.log("isValid: ", isValid);
//     //     // Send a POST request to the server
//     //     $.post('https://formsubmit.co/el/vixohe', $(this).serialize(), function(response) {
//     //         // Show the success pop-up
//     //         $('#success-popup').show();

//     //         // Hide the pop-up when the user clicks the "Close" button
//     //         $('#close-popup').click(function() {
//     //             $('#success-popup').hide();
//     //         });

//     //     });

//     // });

//     // form.addEventListener('submit', () => {
//     //     e.preventDefault();
//     //     $('#success-popup').show();
//     //     setTimeout(() => form.submit(), 2000);
//     // }
//     // );

//     $('#contact-form').submit(function (e) {
//         e.preventDefault(); // prevent the form from submitting normally
//         console.log($(e.target));
//         // var isValid = $(e.target).validate();

//         // console.log();
//         e.target.validationMessage();


//         console.log("isValid: ", isValid);
//         // Send a POST request to the server
//         $.post('https://formsubmit.co/el/vixohe', $(this).serialize(), function (response) {
//             // Show the success pop-up
//             $('#success-popup').show();

//             // Hide the pop-up when the user clicks the "Close" button
//             $('#close-popup').click(function () {
//                 $('#success-popup').hide();
//             });

//         });

//     });

// });

$(function () {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form#contact-form").submit(function(e) {
        e.preventDefault();
    }).validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            name: "required",
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            message: "required"
        },
        // Specify validation error messages
        messages: {
            name: "Please enter your name",
            message: "Please insert your inquiry",
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
            // form.preventDefault();
            // form.submit();
            var form  = $(form);
            var name = form.find("[name=name]").val();
            var email = form.find("[name=email]").val();
            var message = form.find("[name=message]").val();
            var subject = form.find("[name=_subject]").val();
            var template = form.find("[name=_template]").val();
            $.ajax
                ({
                    method: "POST",
                    url: "https://formsubmit.co/ajax/chuahsr99.work@gmail.com",
                    dataType: 'json',
                    // accepts: 'application/json',
                    data: {
                        name: name,
                        email: email,
                        message: message,
                        "_template": template,
                        "_subject": subject,
                    },
                    success: function (data) {
                        // $('#success-popup').show();
                        $('#success-msg').show();
                    }
                });
            return false;
        }
    });
});

// ===================== SCROLLREVEAL JS =====================


window.scrollTo(0, 0);
ScrollReveal({
    distance: '60px',
    origin: 'top',
    duration: 2400,
    // interval: 400,
});


if (window.innerWidth >= 768) {
    ScrollReveal().reveal('#header .a_sr', { interval: 200 });
}

ScrollReveal().reveal('#header .a_sr', { interval: 200 });
ScrollReveal().reveal('#landing .home__social-icon', { interval: 200 });
ScrollReveal().reveal('#landing .home__data *', { interval: 300 });

ScrollReveal().reveal('#about-me .a_sr', { interval: 200 });
ScrollReveal().reveal('#skills .a_sr', { interval: 200 });
ScrollReveal().reveal('#projects .a_sr', { interval: 200 });
ScrollReveal().reveal('#qualifications .a_sr', { interval: 200 });
ScrollReveal().reveal('#contact-me .a_sr', { interval: 200 });

