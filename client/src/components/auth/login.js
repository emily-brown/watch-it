import React from "react";


export class Login extends React.Component {
  state = { username : "", password : "", errors: []};
  

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

onPasswordChange(e) {
  this.setState({ password: e.target.value });
  this.clearValidationErr("password");
}

submitLogin(e) {

if(this.state.username == ""){
 this.showValidationErr("username", "Username is required!");

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
      }
    }
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" 
              onChange={this.onUsernameChange.bind(this)}
              />
              <small className= "danger-error">{usernameErr ? usernameErr : "" }</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"
              onChange=
              {this.onPasswordChange.bind(this)} 
              />
              <small className= "danger-error">{passwordErr ? passwordErr : "" }</small>
            </div>
          </div>
        </div>
        <div className="footer">
          <button 
          type="button"
          className="btn"
          onClick= 
          {this.submitLogin.bind(this)}>Login</button>
        </div>
      </div>
    );
  }
}