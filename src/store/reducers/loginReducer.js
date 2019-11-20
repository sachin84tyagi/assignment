let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const LoginReducer = (state = initialState, action) => {
    console.log("Login Reducer")
    if (action.type === "login") {

        return {
            ...state,
            loginData: "resultData"
        }

    }

    return state;
}

export default LoginReducer;