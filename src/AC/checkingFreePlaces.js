/**
 * Created by pidoi on 4/20/2018.
 */
export function dataHasErrored(bool) {
    return {
        type: 'DATA_HAS_ERRORED',
        hasErrored: bool
    };
}
export function dataFetchDataSuccess(data) {
    return {
        type: 'DATA_FETCH_DATA_SUCCESS',
        data
    };
}
export function fetchData(url) {
    return (dispatch) => {
        fetch(url,{
            method:"GET"})
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(dataFetchDataSuccess(items)))
            .catch(() => dispatch(dataHasErrored(true)));
    };
}