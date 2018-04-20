/**
 * Created by pidoi on 3/28/2018.
 */
export default function (state="", action) {
    switch (action.type){
        case "ENTER_EMAIL": return state=action.payload.email;
    }
    return state;
}