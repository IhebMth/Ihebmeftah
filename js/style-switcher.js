/* =========== toggle style switcher ======== */
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    const x =  document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})


// ========= theme colors ============

const alternateStyles = document.querySelectorAll(".alternate-style")
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled")
        }
        else {
            style.setAttribute("disabled", "ture")
        }
    }
)}

// ========= theme light and dark mode ============

const dayNight = document.querySelector(".day-night")

dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");   
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark")

})


window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }else 
    {
        dayNight.querySelector("i").classList.add("fa-moon")
    }
})

const navLinks = document.querySelector("nav").querySelectorAll("a")
navLinks.forEach(link => {
link.addEventListener("click", function () {
    navLinks.forEach(nav=> nav.classList.remove("active"))
    this.classList.add("active")
})
})
/*
// ======== active nav light ============
const uls = document.querySelectorAll("nav ul");
const links = [...document.querySelectorAll("nav a")];
const light = document.querySelector("nav .tube-light");
let activeIndex = 0;
let cursorIndex = 0;
let increment = 1;
links.forEach((link, index) =>
{
    if (link[index].classList.contains("active"))
    {
        light.style.left = `${links[index].offsetLeft + light.offset.Width/4}px`;
        // light.setAttributeNS("background", "green")
    }
    link.addEventListener("click", (e) =>
    {
            activeIndex = index;
            let t = setInterval(() =>
            {
                if (activeIndex > cursorIndex) increment = 1;
                else if (activeIndex < cursorIndex) increment = -1
                cursorIndex+= increment;
                links[cursorIndex].classList.add("active");
                if(cursorIndex != -1)
                links[cursorIndex - increment].classList.remove('active');

                if (cursorIndex == activeIndex )
                {
                    e.target.classList.add("active");
                    increment = 0 ;
                    clearInterval(t);
                } 
            }, 50);
            light.style.left = `${e.target.offsetLeft + light.offsetWidth/4}px`
        });
    })
    
*/