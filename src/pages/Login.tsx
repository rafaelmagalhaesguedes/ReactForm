import '../components/Login/login.css';
import Image from '../assets/react.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Login () {
  return (
    <div className="container-login">
      <div className="container-form">
        <div className="title-form">
          <h1>Sign in</h1>
        </div>
        
        <div className="link-register">
          <p><a href="#">or create</a> an account</p>
        </div>

        <form className="login-form" id="form">

          <div className="input-login box">
            <FontAwesomeIcon className="icons-login" icon={ faUser } size="lg"/>
            <input type="text" placeholder="Login" className="login-input"/>
          </div>

          <div className="input-password box">
            <FontAwesomeIcon className="icons-login" icon={ faLock } size="lg"/>
            <input type="password" placeholder="Password" className="password-input" />
          </div>

          <div className="input-checkbox">
            <label htmlFor="checkbox-input">Remember me</label>
            <input type="checkbox" className="checkbox-input" id="checkbox-input"/>
          </div>
          
          <div className="button-sign-in">
            <button>Sign in</button>
          </div>
          
          <div className="forgotten-password">
            <p><a href="#">Forgotten your password?</a></p>
          </div>

        </form>

      </div>

      <div className="container-image">
        <img src={ Image } alt="React Login Form"/>
      </div>

    </div>
  )
}

export default Login