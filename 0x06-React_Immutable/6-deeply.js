import { Map } from 'immutable';

/**
 * Recursively merges two objects deeply.
 * @param {Object} obj1 - The first object.
 * @param {Object} obj2 - The second object.
 * @returns {Map} - A Map containing the merged values of both objects.
 */
function mergeDeep(obj1, obj2) {
    // Convert both objects to Maps
    const map1 = Map(obj1);
    const map2 = Map(obj2);

    // Recursively merge the Maps
    return map1.mergeWith((oldVal, newVal) => {
        if (Map.isMap(oldVal)) {
            // If the old value is a Map, recursively merge it with the new value
            return mergeDeep(oldVal, newVal);
        } else if (List.isList(oldVal)) {
            // If the old value is a List, concatenate it with the new value
            return oldVal.concat(newVal);
        } else {
            // Otherwise, combine the values (e.g., for numbers, strings, etc.)
            return oldVal + newVal;
        }
    }, map2);
}

/**
 * Merges two objects deeply and returns a List containing the values of the merged objects.
 * @param {Object} page1 - The first object.
 * @param {Object} page2 - The second object.
 * @returns {List} - A List containing the merged values of both objects.
 */
export function mergeDeeplyElements(page1, page2) {
    // Merge the objects deeply
    const mergedMap = mergeDeep(page1, page2);
    // Return the values of the merged Map as a List
    return mergedMap.valueSeq().toList();
}

