import {cuisines as c} from './cuisines.js'; 
import {ingredients as i} from './ingredients.js'; 

export default [
    // --- Menu Items --- // 
    {
        name: 'Hamburger',
        basePrice: 5, 
        ingredients: [i.bread, i.beef, i.lettuce, i.tomato],
        type: 'burger',
        cuisine: c.american
    },
    {
        name: 'Cubano',
        basePrice: 5,
        ingredients: [i.bread, i.pork, i.mustard],
        type: 'sandwich', 
        cuisine: c.cuban
    }

    




]; 