// ===============================
// Select Elements
// ===============================

const form = document.getElementById("bookingForm");
const bookingSlip = document.getElementById("bookingSlip");
const bookingTable = document.getElementById("bookingTable");

// ===============================
// Booking Form
// ===============================

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const bookingID = "LAB" + Math.floor(Math.random() * 9000 + 1000);

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const lab = document.getElementById("lab").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Booking Slip

    document.getElementById("bookingId").innerText = bookingID;
    document.getElementById("studentName").innerText = name;
    document.getElementById("studentEmail").innerText = email;
    document.getElementById("studentLab").innerText = lab;
    document.getElementById("studentDate").innerText = date;
    document.getElementById("studentTime").innerText = time;

    bookingSlip.style.display = "block";

    bookingSlip.scrollIntoView({

        behavior: "smooth"

    });

    // Add Booking History

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${bookingID}</td>
        <td>${name}</td>
        <td>${lab}</td>
        <td>${date}</td>
        <td>${time}</td>
    `;

    bookingTable.appendChild(row);

    alert("✅ Laboratory Booked Successfully!");

    form.reset();

});

// ===============================
// Download Booking Slip
// ===============================

document.getElementById("downloadSlip").addEventListener("click", function () {

    window.print();

});

// ===============================
// Smooth Navigation
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===============================
// Active Navbar
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Scroll Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll(".card,.booking,.history,.stats,.contact").forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.8s";

    observer.observe(item);

});