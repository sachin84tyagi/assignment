import { Component } from "react";
import { history } from "../../helper/history"

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("user");
    history.push("/login");
  }

  render() {
    return null;
  }
}

export default Logout;
