/**
 * Returns the value of the object at the defined path.
 * @param {Object} object - The plain JavaScript object to access.
 * @param {Array} array - An array containing a list of keys representing the path to the desired value.
 * @returns {string|Map|undefined} - The value at the defined path, or undefined if the path is not valid.
 */
export default function accessImmutableObject(object, array) {
    let value = object;
    // Iterate through each key in the array representing the path
    for (const key of array) {
        // Check if the current value is an object and contains the current key
        if (typeof value === 'object' && value !== null && key in value) {
            // Update the value to the nested object corresponding to the current key
            value = value[key];
        } else {
            // Return undefined if the path is not valid
            return undefined;
        }
    }
    // Return the final value at the end of the path
    return value;
}

