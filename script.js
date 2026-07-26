const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = document.getElementById("name").value;
    const lab = document.getElementById("lab").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    alert(
        "Booking Successful!\n\n" +
        "Student : " + name +
        "\nLaboratory : " + lab +
        "\nDate : " + date +
        "\nTime : " + time
    );

    form.reset();

});