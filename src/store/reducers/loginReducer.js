let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

const LoginReducer = (state = initialState, action) => {
    console.log("Login Reducer", action)
    if (action.type === "login") {

        return {
            ...state,
            loginData: action.payload
        }

    }

    return state;
}

export default LoginReducer;