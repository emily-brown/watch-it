import React from "react";

export class Register extends React.Component {
    state = { username : "", email : "", password : "", errors: []};
  

showValidationErr(elm, msg) {
  this.setState((prevState) => ({ errors: [...prevState.errors, { elm, msg }] } ));
}

clearValidationErr(elm){
this.setState((prevState) => {
  let newArr = [];
  for(let err of prevState.errors) {
if(elm != err.elm) {
newArr.push(err);
}
}
return {errors: newArr};
});
}

onUsernameChange(e) {
this.setState({ username: e.target.value });
this.clearValidationErr("username");
}

onEmailChange(e) {
  this.setState({ email: e.target.value });
  this.clearValidationErr("email");
}

onPasswordChange(e) {
  this.setState({ password: e.target.value });
  this.clearValidationErr("password");
}

submitRegister(e) {

if(this.state.username == ""){
 this.showValidationErr("username", "Username is required!");
} if (this.state.email == "") {
  this.showValidationErr("email", "Email Cannot be empty!");
} if (this.state.password == ""){
  this.showValidationErr("password", "Password Cannot be empty!");
}

}
  render() {

    let usernameErr = null, passwordErr = null, emailErr = null;

    for(let err of this.state.errors) {
      if(err.elm == "username"){
        usernameErr = err.msg;
      } if (err.elm == "password"){
        passwordErr = err.msg;
      } if (err.elm == "email"){
        emailErr = err.msg;
      }
    }
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
              type="text" 
              name="username" placeholder="username" 
              onChange={this.onUsernameChange.bind(this)}
              />
              <small className= "danger-error">{usernameErr ? usernameErr : "" }</small>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
              type="text" 
              name="email" placeholder="email" 
              onChange={this.onEmailChange.bind(this)}
              />
              <small className= "danger-error">{emailErr ? emailErr : "" }</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
              type="text" 
              name="password" placeholder="password" 
              onChange={this.onPasswordChange.bind(this)}
              />
              <small className= "danger-error">{passwordErr ? passwordErr : "" }</small>
            </div>
          </div>
        </div>
        <div className="footer">
          <button 
          type="button" 
          className="btn"
          onClick={this.submitRegister.bind(this)}>Register</button>
        </div>
      </div>
    );
  }
}