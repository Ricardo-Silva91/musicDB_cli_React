/**
 * Created by rofler on 5/31/17.
 */
import {compose, createStore} from 'redux';
import rootReducer from './reducers/index';
import persistState from 'redux-localstorage'

const enhancer = compose(
    persistState()
);

export default(initialState) => {
    return createStore(rootReducer, initialState, enhancer);
}