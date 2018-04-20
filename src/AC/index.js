/**
 * Created by pidoi on 3/27/2018.
 */
export function selectHour(hour, date) {
    return{
        type:"SELECT_HOUR",
        payload:{
            hour, date
        }
    }
}
export function enterName(name) {
    return{
        type:"ENTER_NAME",
        payload:{
            name
        }
    }
}
export function enterPhone(phonenumber) {
    return{
        type:"ENTER_PHONE",
        payload:{
            phonenumber
        }
    }
}
export function enterEmail(email) {
    return{
        type:"ENTER_EMAIL",
        payload:{
            email
        }
    }
}
export function showingPopup() {
    return{
        type:"SHOW_POPUP"
    }
}