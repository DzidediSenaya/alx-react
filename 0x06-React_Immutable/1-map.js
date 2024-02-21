// Import the Map class from Immutable.js
const { Map } = require('immutable');

/**
 * Converts a plain JavaScript object into an immutable Map using Immutable.js Map.
 * @param {Object} object - The plain JavaScript object to convert.
 * @returns {Map} - The resulting immutable Map.
 */
function getImmutableObject(object) {
    // Convert the object into an immutable Map
    return Map(object);
}

// Example object
const exampleObject = {
    fear: true,
    smell: -1033575916.9145899,
    wall: false,
    thing: -914767132
};

// Test the function
const immutableMap = getImmutableObject(exampleObject);
console.log(immutableMap);

