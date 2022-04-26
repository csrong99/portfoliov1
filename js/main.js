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

//activate/deactivate theme manually w button
themeButton.addEventListener('click',()=>{
    //add/remove dark/icon theme
    document.documentElement.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //save theme and current icon user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
});

//scrolling number 


