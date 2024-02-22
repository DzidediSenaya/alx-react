import { Map } from 'immutable';

/**
 * Converts a plain JavaScript object into an immutable Map using Immutable.js Map constructor.
 * @param {Object} object - The plain JavaScript object to convert.
 * @returns {Map} - The resulting immutable Map.
 */
const getImmutableObject = (object) => Map(object);

export default getImmutableObject;
