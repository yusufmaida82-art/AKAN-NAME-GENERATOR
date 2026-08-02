// Connect to the form
const heritageFinder = document.getElementById("heritageFinder");

// Listen for the submit event
heritageFinder.addEventListener("submit", function (event) {

    event.preventDefault();

    // Read the values entered by the user
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    // Find the selected gender
    const choice = document.querySelector('input[name="gender"]:checked');

    // If no gender was selected
    if (!choice) {
        alert("Please choose your gender.");
        return;
    }

    const gender = choice.value;
// Validate the inputs
if (day < 1 || day > 31) {
    alert("Day must be between 1 and 31.");
    return;
}

if (month < 1 || month > 12) {
    alert("Month must be between 1 and 12.");
    return;
}

// Formula variables
const CC = Math.floor(year / 100);
const YY = year % 100;
const MM = month;
const DD = day;

// Calculate the day of the week using the formula
let dayNumber = Math.floor(
    ((CC / 4) - (2 * CC) - 1 + ((5 * YY) / 4) + ((26 * (MM + 1)) / 10) + DD) % 7
);
   
    // Days of the week
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    // Akan names
    const names = {

        male: {
            Sunday: "Kwasi",
            Monday: "Kwadwo",
            Tuesday: "Kwabena",
            Wednesday: "Kwaku",
            Thursday: "Yaw",
            Friday: "Kofi",
            Saturday: "Kwame"
        },

        female: {
            Sunday: "Akosua",
            Monday: "Adwoa",
            Tuesday: "Abenaa",
            Wednesday: "Akua",
            Thursday: "Yaa",
            Friday: "Afua",
            Saturday: "Ama"
        }

    };

    // Discover the weekday
    const bornOn = weekdays[birthday.getDay()];

    // Find the Akan name
    const akanName = names[gender][bornOn];

    // Show the result
    document.getElementById("result").innerHTML = `
        <h2>Hello!</h2>
        <p>You were born on <strong>${bornOn}</strong>.</p>
        <p>Your Akan name is <strong>${akanName}</strong>.</p>
    `;

});
