/**
 * Created by pidoi on 3/27/2018.
 */
import {combineReducers} from 'redux';
import selectedHour from './selectingHour'
import enteringName from './enteringName';
import enteringEmail from './enteringEmail';
import enteringPhone from './enteringPhoneNumber';
import showingPopup from './showingPopup';
import userCreateSuccess from './createUser';
import {dataHasErrored} from './checkingFreePlaces';
import {data} from './checkingFreePlaces';
export default combineReducers({
    selectedHour:selectedHour,
    name:enteringName,
    phone:enteringPhone,
    email:enteringEmail,
    makeVisible:showingPopup,
    userCreateSuccess,
    dataHasErrored,
    data});