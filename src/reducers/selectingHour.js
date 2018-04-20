/**
 * Created by pidoi on 3/27/2018.
 */
const dayAndHour={
  day:"",
    hour:0
};
export default function (state=dayAndHour, action) {
    switch (action.type){
        case "SELECT_HOUR": return Object.assign({}, {day:action.payload.date}, {hour:action.payload.hour});
    }
    return state;
}