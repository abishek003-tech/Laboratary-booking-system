// ===============================
// LABORATORY BOOKING PORTAL
// ===============================

const form = document.getElementById("bookingForm");
const popup = document.getElementById("popup");
const historyBody = document.getElementById("historyBody");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Get Form Values
    const name = form.querySelector('input[placeholder="Student Name"]').value;
    const regNo = form.querySelector('input[placeholder="Register Number"]').value;
    const department = form.querySelector('input[placeholder="Department"]').value;
    const lab = form.querySelector("select").value;
    const date = form.querySelector('input[type="date"]').value;
    const time = form.querySelector('input[type="time"]').value;

    // Validate Lab Selection
    if (lab === "Select Laboratory") {
        alert("Please select a laboratory.");
        return;
    }

    // Create New Table Row
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${lab}</td>
        <td>${date}</td>
        <td>${time}</td>
    `;

    historyBody.appendChild(row);

    // Success Popup
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 3000);

    // Success Alert
    alert(
        "Booking Successful!\n\n" +
        "Student : " + name +
        "\nRegister No : " + regNo +
        "\nDepartment : " + department +
        "\nLaboratory : " + lab
    );

    // Reset Form
    form.reset();

});

// ===============================
// BOOK BUTTONS
// ===============================

const bookButtons = document.querySelectorAll(".card button");

bookButtons.forEach(button => {

    button.addEventListener("click", () => {

        document
            .getElementById("booking")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});

// ===============================
// CURRENT YEAR IN FOOTER
// ===============================

const footer = document.querySelector("footer p");

footer.innerHTML =
    "© " +
    new Date().getFullYear() +
    " Laboratory Booking Portal | Designed by Abishek";

// ===============================
// HERO BUTTON ANIMATION
// ===============================

const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("mouseenter", () => {
    heroButton.style.boxShadow = "0px 0px 20px orange";
});

heroButton.addEventListener("mouseleave", () => {
    heroButton.style.boxShadow = "none";
});

// ===============================
// CARD HOVER EFFECT
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0px) scale(1)";

    });

});

// ===============================
// WELCOME MESSAGE
// ===============================

window.onload = function () {

    console.log("Laboratory Booking Portal Loaded Successfully.");

};