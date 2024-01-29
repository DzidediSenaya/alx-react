// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';

// Elements to add
const elementsToAdd = [
    '<p>Holberton Dashboard</p>',
    '<p>Dashboard data for the students</p>',
    '<button id="startButton">Click here to get started</button>',
    '<p id="count"></p>',
    '<p>Copyright - Holberton School</p>',
];

// Function to update counter and prevent spamming
let count = 0;

function updateCounter() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}

// Debounce the click event
const debouncedUpdateCounter = _.debounce(updateCounter, 1000);

// Add elements to the body
$(document).ready(function() {
    elementsToAdd.forEach(element => {
        $('body').append(element);
    });

    // Bind the debounced function to the click event
    $('#startButton').on('click', debouncedUpdateCounter);
});
