import { ChangeEvent, useEffect, useState } from 'react';
import { LoginData } from '../type.';
import { v4 as uuid } from 'uuid';
import PasswordValidate from '../components/Register/PasswordValidate';
import PasswordToggleButton from '../components/Register/PasswordToggleButton';

function Register() {
  const initialFormData: LoginData = {
    id: '',
    name: '',
    login: '',
    password: '',
    email: '',
  };

  const [formData, setFormData] = useState<LoginData>(initialFormData);

  const [dataList, setDataList] = useState<LoginData[]>([]);

  const [button, setButton] = useState(false);
  
  const [lengthPassword, setLengthPassword] = useState(false);
  const [maxLengthPassword, setMaxLengthPassword] = useState(false);
  const [specialCharacter, setSpecialCharacter] = useState(false);
  const [LettersAndNumbers, setLettersAndNumbers] = useState(false);
  const [emailValid, setEmailValid] = useState(false);

  // Button Show Password
  const [passwordType, setPasswordType] = useState(false);

  // Button Show Password State
  const togglePasswordVisibility = () => {
    setPasswordType((prevVisible) => !prevVisible);
  };
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validatePassword = (password: string) => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return passRegex.test(password);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email)
  };

  useEffect(() => {
    const validPassword = validatePassword(formData.password);
    const validEmail = validateEmail(formData.email);
    setLengthPassword(formData.password.length > 8);
    setMaxLengthPassword(formData.password.length < 17);
    setSpecialCharacter(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(formData.password));
    setLettersAndNumbers(/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(formData.password));
    setEmailValid(validEmail);
    setButton(!(validPassword && validEmail));
    
  },[formData, lengthPassword, specialCharacter, LettersAndNumbers, maxLengthPassword]);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newId = uuid();

    const newDataWithId = { ...formData, id: newId };

    setDataList((prevDataList) => [...prevDataList, newDataWithId]);

    localStorage.setItem('dataUser', JSON.stringify(dataList));

    setFormData(initialFormData);
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="inputs-form">
        <h2 className="title-form">Register User</h2>
        <div className="input-box">
          <label>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="inputs-login-pass">
          <div className="input-box">
            <label>Login</label>
            <input
              id="login"
              name="login"
              value={formData.login}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label>Password</label>
            <input
              type={passwordType ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <PasswordToggleButton
              passwordType={ passwordType }
              onClick={ togglePasswordVisibility }
            />
        </div>
        
        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>


      <div className="password-validate">

        <PasswordValidate 
          valid={ lengthPassword }
          text="Possuir 8 ou mais caracteres"
        />

        <PasswordValidate 
          valid={ maxLengthPassword }
          text="Possuir até 16 caracteres"
        />
        
        <PasswordValidate
          valid={ specialCharacter }
          text="Possuir algum caractere especial"
        />

        <PasswordValidate
          valid={ LettersAndNumbers }
          text="Possuir letras e números"
        />

        <PasswordValidate
          valid={ emailValid }
          text="Possuir um email válido"
        />

      </div>

      <div className="buttons-form">
        <button className="register-button" disabled={ button } type="submit">Register</button>
        <button className="clear-button" type="reset">Cancel</button>
      </div>
    </form>
  );
}

export default Register;
