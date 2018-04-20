/**
 * Created by pidoi on 3/27/2018.
 */
export default function (state="", action) {
    switch (action.type){
        case "ENTER_NAME": return state=action.payload.name;
    }
    return state;
}