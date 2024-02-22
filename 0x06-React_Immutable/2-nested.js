import { fromJS } from 'immutable';

/**
 * Accesses a value in an immutable object at the specified path.
 * @param {Object} object - The plain JavaScript object to access.
 * @param {Array} array - An array containing a list of keys representing the path to the desired value.
 * @returns {any|undefined} - The value at the defined path, or undefined if the path is not valid.
 */
const accessImmutableObject = (object, array) => {
  // Convert the plain JavaScript object into an immutable Map
  const mappedObj = fromJS(object);
  
  // Retrieve the value at the defined path using the getIn method
  // If the path is not valid, return undefined
  return mappedObj.getIn(array, undefined);
};

export default accessImmutableObject;
