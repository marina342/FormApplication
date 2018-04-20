/**
 * Created by pidoi on 4/20/2018.
 */
export default function userCreateSuccess(state = null, action) {
    switch (action.type) {
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return action.success;
        default:
            return state;
    }
}