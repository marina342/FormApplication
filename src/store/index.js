/**
 * Created by pidoi on 3/27/2018.
 */
import {createStore} from 'redux';
import reducer from '../reducers/index';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
const store= createStore(reducer,applyMiddleware(thunk));
window.store=store;
export default store;
