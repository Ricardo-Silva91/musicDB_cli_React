/**
 * Created by rofler on 5/31/17.
 */
export const addToCart = (item) => {
    console.log('adding item:', item);
    return {
        type: 'add',
        item
    };
}