import { is } from 'immutable';

/**
 * Checks if two Immutable Maps are equal.
 * @param {Map} map1 - The first Immutable Map.
 * @param {Map} map2 - The second Immutable Map.
 * @returns {boolean} - True if the maps are equal, false otherwise.
 */
const areMapsEqual = (map1, map2) => {
    // Use the is function from Immutable.js to check equality
    return is(map1, map2);
};

export default areMapsEqual;
