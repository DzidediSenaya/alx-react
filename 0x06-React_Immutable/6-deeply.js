import { Map } from 'immutable';

/**
 * Merges two objects deeply and returns a Map containing the merged values of both objects.
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object.
 * @returns {Map} - A Map containing the merged values of both objects.
 */
function mergeDeeplyElements(obj1, obj2) {
    // Use Immutable.js mergeDeep function to merge the objects deeply
    return Map(obj1).mergeDeep(Map(obj2));
}

export default mergeDeeplyElements;
