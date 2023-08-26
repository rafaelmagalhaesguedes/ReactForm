import { ChangeEvent, useEffect, useState } from 'react';
import { LoginData } from '../type.';
import { v4 as uuid } from 'uuid';

function RegisterUser() {
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForms = (password: string) => {
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passRegex.test(password);
  }

  useEffect(() => {
    const valida = validateForms(formData.password);
    setButton(!valida);
    
  },[formData]);

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
      <h2>Register User</h2>
      <div>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="inputs-box">
        <div>
          <label>Login</label>
          <input
            id="login"
            name="login"
            value={formData.login}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-buttons">
        <button disabled={ button } type="submit">Register</button>
      </div>
    </form>
  );
}

export default RegisterUser;
