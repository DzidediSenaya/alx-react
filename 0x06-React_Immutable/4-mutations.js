import { Map } from 'immutable';

// Create an Immutable Map named 'map'
export const map = Map({
    1: 'Liam',
    2: 'Noah',
    3: 'Elijah',
    4: 'Oliver',
    5: 'Jacob',
    6: 'Lucas',
});

// Create a new Immutable Map named 'map2' by modifying 'map'
export const map2 = map
    // Use 'set' method to modify the values for the specified keys
    .set(2, 'Benjamin')
    .set(4, 'Oliver');

// Export the constants 'map' and 'map2'
export { map, map2 };

