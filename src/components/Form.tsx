import { ChangeEvent, useState } from 'react';
import { LoginData } from '../type.';
import { v4 as uuid } from 'uuid';

function Form() {
  const initialFormData: LoginData = {
    id: '',
    name: '',
    login: '',
    password: '',
    email: '',
  };

  const [formData, setFormData] = useState<LoginData>(initialFormData);

  const [dataList, setDataList] = useState<LoginData[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

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
      <h2>Enter your data</h2>
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
        <button type="submit">Register</button>
        <button type="reset">Clear</button>
      </div>
    </form>
  );
}

export default Form;
