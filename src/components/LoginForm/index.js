// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginFrom extends Component {
  state = {userName: '', password: '', showErrorMsg: false, errorMsg: ''}

  onSubmitSuccess = () => {
    const {history} = this.props

    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.setState({showErrorMsg: true, errorMsg: data.error_msg})
    }
  }

  onChangeUserName = event => {
    this.setState({userName: event.target.value})
  }

  onChangeUserPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {userName, password, showErrorMsg, errorMsg} = this.state

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="small-logo-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-image"
        />
        <form onSubmit={this.submitForm} className="form-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="large-logo-image"
          />

          <label className="user-input-label" htmlFor="userName">
            USERNAME
          </label>
          <input
            type="text"
            value={userName}
            placeholder="Username"
            id="userName"
            onChange={this.onChangeUserName}
            className="user-input"
          />
          <label className="user-input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            value={password}
            placeholder="Password"
            id="password"
            onChange={this.onChangeUserPassword}
            className="user-input"
          />
          <button type="submit" className="login-btn">
            Login
          </button>
          {showErrorMsg ? <p className="warning">{`*${errorMsg}`}</p> : null}
        </form>
      </div>
    )
  }
}

export default LoginFrom
