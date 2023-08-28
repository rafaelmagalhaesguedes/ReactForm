import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs';
import { ChangeEvent, useEffect, useState } from 'react';
import { LoginData } from '../../type';
import { v4 as uuid } from 'uuid';
import ValidateForms from './RegisterValidateForms';
import RegisterToggleButton from './RegisterToggleButton';

export default function RegisterForm() {
  const initialFormData: LoginData = {
    id: '',
    name: '',
    login: '',
    password: '',
    email: '',
  };

  // Form data
  const [formData, setFormData] = useState<LoginData>(initialFormData);

  // Button Register
  const [button, setButton] = useState(false);

  // Validates Forms
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
  
  // Handle Change Values
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Validate Password
  const validatePassword = (password: string) => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    return passRegex.test(password);
  };

  // Validate Email format
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Hook useEffect
  useEffect(() => {
    setLengthPassword(formData.password.length > 8);
    setMaxLengthPassword(formData.password.length < 17);
    setSpecialCharacter(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/.test(formData.password));
    setLettersAndNumbers(/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(formData.password));
    const validPassword = validatePassword(formData.password);
    const validEmail = validateEmail(formData.email);
    setEmailValid(validEmail);
    setButton(!(validPassword && validEmail));
  },[formData]);

  // Submit
  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Get Data 
    const user = localStorage.getItem('dataUser');
    
    // Data?
    if (user) {
      // Parse Data
      const userExist: LoginData[] = JSON.parse(user);
      
      // Checks if there is already a user with the same login or email
      const duplicateLogin = userExist.some(user => user.login === formData.login);
      const duplicateEmail = userExist.some(user => user.email === formData.email);
  
      if (duplicateLogin) {
        Swal.fire({
          text: 'Login already exist',
          icon: 'error',
          timer: 2500,
          timerProgressBar: true,
        });
        return;
      }
  
      if (duplicateEmail) {
        Swal.fire({
          text: 'Email already exist',
          icon: 'error',
          timer: 2500,
          timerProgressBar: true,
        });
        return;
      }

      // Generate a hash of the password
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(formData.password, saltRounds);

      // Continue the process if there are no duplicates
      const newId = uuid();
      const newDataWithId = {
        ...formData,
        id: newId,
        login: formData.login.trim(),
        email: formData.email.trim(),
        password: hashedPassword, // Store the hashed password
      };
  
      // Save data local storage
      localStorage.setItem('dataUser', JSON.stringify([...userExist, newDataWithId]));
  
      // Reset Form
      setFormData(initialFormData);
  
      Swal.fire({
        text: 'User registered successfully',
        icon: 'success',
        timer: 2500,
        timerProgressBar: true,
      });
    }
  };   

  // Button reset form
  const handleResetForm = () => {
    setFormData(initialFormData);
  };

  return (
    <form id="form" className="form-register" onSubmit={handleSubmit}>
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
            <label>Username</label>
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
          <RegisterToggleButton
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

        <ValidateForms 
          valid={ lengthPassword }
          text="Possuir 8 ou mais caracteres"
        />

        <ValidateForms 
          valid={ maxLengthPassword }
          text="Possuir até 16 caracteres"
        />
        
        <ValidateForms
          valid={ specialCharacter }
          text="Possuir algum caractere especial"
        />

        <ValidateForms
          valid={ LettersAndNumbers }
          text="Possuir letras e números"
        />

        <ValidateForms
          valid={ emailValid }
          text="Possuir um email válido"
        />

      </div>

      <div className="buttons-form">
        <button className="register-button" disabled={ button } type="submit">Register</button>
        <button className="clear-button" type="reset" onClick={ handleResetForm }>Reset</button>
      </div>
    </form>
  );
}
