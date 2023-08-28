import { useState, useEffect } from 'react';
import { LoginData } from '../type';

function Admin() {
  const [data, setData] = useState<LoginData[]>([]);
    
  useEffect(() => {
    const user = localStorage.getItem('dataUser');
    
    if (user) {
      const parseData: LoginData[] = JSON.parse(user);
      setData(parseData);
    }
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Login</th>
            <th>Password</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {data.map((element) => (
            <tr key={element.id}>
              <td>{element.id}</td>
              <td>{element.name}</td>
              <td>{element.login}</td>
              <td>{element.password}</td>
              <td>{element.email}</td>
            </tr>
          ))}
          </tbody>
      </table>
    </div>
  )
}

export default Admin