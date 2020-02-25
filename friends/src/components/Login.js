import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    isFetchingData: false,
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.setState({ isFetchingData: true });
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then(res => {
        window.localStorage.setItem("token", res.data.payload);

        // *** Not working, this.props is empty ***
        this.props.history.push("/protected");

        console.log("!", this.props);

        this.setState({ isFetchingData: false });
      })
      .catch(err => {
        console.log("!", this);
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />

          {this.state.isFetchingData ? (
            <img src="../images/loader.gif" alt="" />
          ) : (
            <button>Login</button>
          )}
        </form>
      </div>
    );
  }
}

export default Login;
