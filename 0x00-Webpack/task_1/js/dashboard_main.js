// Import jQuery
import $ from 'jquery';

// Function to update the click counter
let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

// DOM manipulation using jQuery
$(document).ready(function () {
    // Add paragraphs and button to the body
    $('body').append('<p>ALX Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="startButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - ALX</p>');

    // Bind updateCounter function to the button click event using debounce
    const debouncedUpdateCounter = _.debounce(updateCounter, 500);  // Debounce the click event by 500ms

    $('#startButton').on('click', debouncedUpdateCounter);
});

