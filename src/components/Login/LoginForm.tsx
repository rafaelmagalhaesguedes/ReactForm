/* import Swal from 'sweetalert2';
 */import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/react.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent } from 'react';
import LoginToggleButton from './LoginToggleButton';
import './login.css';

type DataTypeLogin = {
  login: string,
  password: string,
};

function LoginForm() {
  const [formData, setFormData] = useState<DataTypeLogin>({
    login: '',
    password: '',
  });

  const navigate = useNavigate();

  // Button Show Password
  const [passwordType, setPasswordType] = useState(false);

  // Button Show Password State
  const togglePasswordVisibility = () => {
    setPasswordType((prevData) => !prevData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataUser = localStorage.getItem('dataUser');

    if (dataUser) {
      const dataUserList: DataTypeLogin[] = JSON.parse(dataUser);

      const user = dataUserList.find(({ login, password }) => 
        login === formData.login && password === formData.password && login === 'admin' || login === 'root');

      if (user) {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } else {
      // No user data found
      navigate('/login');
    }
  };

  return (
    <div className="container-login">
      <div className="container-form">
        <div className="title-form">
          <h1>Sign in</h1>
        </div>
        
        <div className="link-register">
          <p><a href="#">or create</a> an account</p>
        </div>

        <form onSubmit={ handleSubmit } className="login-form" id="form">
          
          <div className="input-login box">
            <FontAwesomeIcon className="icons-login" icon={ faUser } size="lg"/>
            <input
              type="text"
              placeholder="Username"
              name="login"
              className="login-input"
              value={ formData.login }
              onChange={ handleChange }
            />
          </div>

          <div className="input-password box">
            <FontAwesomeIcon className="icons-login" icon={ faLock } size="lg"/>
            <input
              type={passwordType ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              className="password-input"
              value={ formData.password }
              onChange={ handleChange }
            />
            <LoginToggleButton
              passwordType={ passwordType }
              onClick={ togglePasswordVisibility }
            />
          </div>

          <div className="input-checkbox">
            <label htmlFor="checkbox-input">Remember me</label>
            <input
              type="checkbox"
              className="checkbox-input"
              id="checkbox-input"
            />
          </div>
          
          <div className="button-sign-in">
            <button type="submit">Sign in</button>
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

export default LoginForm;