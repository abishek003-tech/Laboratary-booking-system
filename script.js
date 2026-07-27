// =============================
// Booking Form
// =============================

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const lab = document.getElementById("lab").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    alert(
`✅ Booking Successful!

Student : ${name}

Laboratory : ${lab}

Date : ${date}

Time : ${time}

Thank You!`
    );

    form.reset();

});


// =============================
// Smooth Scrolling
// =============================

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior:'smooth'

        });

    });

});


// =============================
// Active Navigation
// =============================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});


// =============================
// Scroll Animation
// =============================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{threshold:0.2});

document.querySelectorAll(".card,.booking,.stat-box,.contact")
.forEach(el=>observer.observe(el));


// =============================
// Button Ripple Effect
// =============================

const buttons = document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(button.clientWidth,button.clientHeight);

circle.style.width=circle.style.height=diameter+"px";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

circle.classList.add("ripple");

const ripple=button.querySelector(".ripple");

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});


// =============================
// Header Shadow
// =============================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.style.boxShadow="0 5px 20px rgba(0,0,0,0.15)";

}

else{

header.style.boxShadow="0 3px 10px rgba(0,0,0,0.08)";

}

});