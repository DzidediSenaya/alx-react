/**
 * Accesses a value in an immutable object at the specified path.
 * @param {Object} object - The plain JavaScript object to access.
 * @param {Array} array - An array containing a list of keys representing the path to the desired value.
 * @returns {any|undefined} - The value at the defined path, or undefined if the path is not valid.
 */
import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
  const mappedObj = fromJS(object);
  return mappedObj.getIn(array, undefined);
};

export default accessImmutableObject;
