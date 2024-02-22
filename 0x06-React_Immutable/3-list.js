import { List } from 'immutable';

/**
 * Converts an array into an immutable List.
 * @param {Array} array - The array to convert.
 * @returns {List} - The resulting immutable List.
 */
export const getListObject = (array) => List(array);

/**
 * Appends an element to an immutable List.
 * @param {List} list - The immutable List to which the element will be appended.
 * @param {any} element - The element to append.
 * @returns {List} - The updated immutable List.
 */
export const addElementToList = (list, element) => list.push(element);
