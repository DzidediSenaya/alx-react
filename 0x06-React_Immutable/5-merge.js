import { List, Map } from 'immutable';

/**
 * Concatenates the values of two arrays into a List.
 * @param {Array} page1 - The first array.
 * @param {Array} page2 - The second array.
 * @returns {List} - A List containing the values of both arrays.
 */
export const concatElements = (page1, page2) => List(page1).concat(List(page2));

/**
 * Merges the values of two objects into a List.
 * If two values are the same, page2 values are used.
 * @param {Object} page1 - The first object.
 * @param {Object} page2 - The second object.
 * @returns {List} - A List containing the merged values of both objects.
 */
export const mergeElements = (page1, page2) => Map(page1).merge(Map(page2)).toList();
