export const loginAction = (username, password) => {

    console.log(username, password)
    //console.log("Login Action Dispatch")
    // return (dispatch) => {
    //     dispatch({ type: "login", payload: "nothing" });
    // }

    return {
        type: "login"
    }

}
