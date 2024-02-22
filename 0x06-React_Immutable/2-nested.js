import { fromJS } from 'immutable';

/**
 * Returns the value of the object at the defined path.
 * @param {Object} object - The plain JavaScript object to access.
 * @param {Array} array - An array containing a list of keys representing the path to the desired value.
 * @returns {any|undefined} - The value at the defined path, or undefined if the path is not valid.
 */
const accessImmutableObject = (object, array) => {
  const mappedObj = fromJS(object);
  return mappedObj.getIn(array, undefined);
};

export default accessImmutableObject;
