import { is } from 'immutable';

const areMapsEqual = (map1, map2) => {
    // Use the is function from Immutable.js to check equality
    return is(map1, map2);
};

export default areMapsEqual;
