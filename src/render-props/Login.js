import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handleLogin = (e) => {
    e.preventDefault();

    let email = "test01@gmail.com";

    let password = "123456";

    const data = {
      email: email,
      password: password,
    };

    //let dataStr = `email=${email}&password=${password}`; //query string

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: new URLSearchParams(data).toString(),
    };

    fetch("https://unicode.vn/api/login.php", options)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col col-6">
              <h1>Login</h1>
              <form onSubmit={this.handleLogin}>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email..."
                  />
                </div>

                <div className="mb-3">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Password..."
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
