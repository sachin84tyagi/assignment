import React, { Component } from 'react';
import { connect } from "react-redux";
import { loginAction } from "../../store/actions/loginAction"

class LoginForm extends Component {
    state = {
        username: "",
        password: "",
        submitted: false
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {

            //this.props.passParam(1);
            this.props.login(username, password);
        }
    }
    render() {

        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                        <label htmlFor="username">Username</label>
                        <input type="text" className="form-control" name="username" value={username} onChange={this.handleChange} />
                        {submitted && !username &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={this.handleChange} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>

                    </div>
                </form>
            </div>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        data: state.loginData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (username, password) => dispatch(loginAction(username, password))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);