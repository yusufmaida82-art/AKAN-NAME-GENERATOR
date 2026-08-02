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

    // Create a date
    const birthday = new Date(year, month - 1, day);

    // Validate the date
    if (
        birthday.getDate() !== day ||
        birthday.getMonth() !== month - 1 ||
        birthday.getFullYear() !== year
    ) {
        alert("Please enter a valid birth date.");
        return;
    }

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