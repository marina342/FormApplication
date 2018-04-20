/**
 * Created by pidoi on 3/30/2018.
 */
export default function (state=false, action) {
    switch (action.type){
        case "SHOW_POPUP": state=true; return state;
    }
    return state;
}