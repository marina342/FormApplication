/**
 * Created by pidoi on 4/20/2018.
 */

export function userCreateSuccess(bool) {
    return {
        type: 'USER_CREATE_SUCCESS',
        success: bool
    };
}
export function fetchCreateUser(url, name, phone, email, hour, day) {
    console.log("fdjskfjkd");
    return (dispatch) => {
        fetch(url,{
            body:JSON.stringify({
                fields:{
                    'Name' : name.toString(),
                    'Phone': phone.toString(),
                    'Email':email.toString(),
                    'Hour':hour.toString()+":00",
                    "Day": day.toString()
                }
            }),
            method:"POST"
        }).then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(userCreateSuccess(true)))
            .catch(() => dispatch(userCreateSuccess(false)));
    };
}