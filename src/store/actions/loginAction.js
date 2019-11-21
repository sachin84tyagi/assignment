import axios from "axios"
import { store } from 'react-notifications-component';


export const loginAction = (username, password) => {
    return async (dispatch) => {
        const userData = await getUserData(username, password);
        dispatch({
            type: "login",
            payload: userData
        });

    }
}

export const getUserData = async (username, password) => {
    const { data } = await axios.get("https://swapi.co/api/people");

    const user = username.toLowerCase();
    const pass = password.toLowerCase();

    const recordData = data.results.filter((data) => data.name.toLowerCase() === user && data.birth_year.toLowerCase() === pass)
    if (recordData.length > 0) {

        return recordData;
        localStorage.setItem("user", recordData)


    } else {
        store.addNotification({
            title: "Login Error!",
            message: "Username Or Password is incorrect.",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });

        console.log("Username Or Password is incorrect.")
    }

}
// export const loginAction = () => {
//     return {
//         type: "login",
//         payload: "20"
//     }
// }

// export const getApiCall = (data) => {
//     console.log("getApiCall :: ", data)
//     //const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
//     //return data;
//     return {
//         type: "login",
//         payload: data
//     }
// }

// export const loginAction = () => {
//     return async (dispatch) => {
//         const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
//         dispatch(getApiCall(data));
//     }
// };

// export const saveResult = () => {
//     return {
//         type: "login",
//         result: "res"
//     };
// }

// export const loginAction = () => {
//     return dispatch => {
//         setTimeout(() => {
//             dispatch(saveResult());
//         }, 2000);
//     }
// };