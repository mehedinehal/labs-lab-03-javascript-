// Number of seats currently available for the workshop
let availableSeats = 12;

// Interaction 1: Update the registration status text on the page
function checkRegistration() {
    let message = document.getElementById("registrationStatus");
    message.textContent = "Registration is currently open.";
}

// Interaction 2: Check seat availability using a simple if...else condition
function checkSeats() {
    let message = document.getElementById("seatMessage");

    if (availableSeats > 0) {
        message.textContent = "Seats are available. Remaining seats: " + availableSeats;
    } else {
        message.textContent = "Sorry, no seats are available.";
    }
}

// Interaction 3: Read the student's name and show a personalised greeting
function showGreeting() {
    let name = document.getElementById("fullname").value;
    let output = document.getElementById("greetingMessage");

    if (name === "") {
        output.textContent = "Please type your name above first.";
    } else {
        output.textContent = "Welcome, " + name + "! Thank you for registering.";
    }
}

// Independent feature: show the main event venue
function showVenue() {
    let message = document.getElementById("venueMessage");
    message.textContent = "The event will be held at the Main Auditorium, Southeast University.";
}
