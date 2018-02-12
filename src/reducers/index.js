/**
 * Created by rofler on 5/31/17.
 */
import cart from './cart';
import myValues from './MyValues';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
    cart,
    myValues
});
export default rootReducer;