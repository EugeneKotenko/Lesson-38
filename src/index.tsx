import React from "react";
import ReactDOM from "react-dom";
import EmailValidator from "./ValidEmail";

class App extends React.Component {
  state = {
    email: "",
    isValid: false,
  };

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    const emailValidator = new EmailValidator();
    const isValid = emailValidator.isValidEmail(email);

    this.setState({
      email,
      isValid,
    });
  };

  render() {
    return (
      <div>
        <h1>Email Validator</h1>
        <input
          type="text"
          placeholder="Enter your email"
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        {this.state.isValid ? (
          <p>Валідна електронна адреса</p>
        ) : (
          <p>Невалідна електронна адреса</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
