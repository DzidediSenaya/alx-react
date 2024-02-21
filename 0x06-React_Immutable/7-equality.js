import { is } from 'immutable';

/**
 * Checks if two Immutable.js Maps are equal.
 * @param {Map} map1 - The first Immutable.js Map.
 * @param {Map} map2 - The second Immutable.js Map.
 * @returns {boolean} - True if the Maps are equal, false otherwise.
 */
export function areMapsEqual(map1, map2) {
    return is(map1, map2);
}

