import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      password: '', 
      loggedIn: false,
      users: []
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,    
    })
    console.log(this.state)

  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value,    
    })
    console.log(this.state)

  }
  onSubmit(e) {
    e.preventDefault(); 
    const user = {
      username: this.state.username,
      password: this.state.password,
      loggedIn: true,
    }

    axios.post ('/user/login', user)
      .then (res => {
        window.location.replace("/");
      });   
  }
  render() {
    return (
      <form onSubmit = {this.onSubmit}>
        <h3>Login</h3>
        <div className="form-group">
          <label>Username</label>
          <input onChange= {this.onChangeUsername} type="username" className="form-control" placeholder="Enter username" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input onChange = {this.onChangePassword} type="password" className="form-control" placeholder="Enter password" />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="customCheck1" />
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">Submit</button>
       </form>
    );
  }
}