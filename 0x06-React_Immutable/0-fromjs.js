import { fromJS } from 'immutable';

/**
 * Converts a plain JavaScript object into an immutable Map using Immutable.js fromJS function.
 * @param {Object} object - The plain JavaScript object to convert.
 * @returns {Map} - The resulting immutable Map.
 */
const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;
