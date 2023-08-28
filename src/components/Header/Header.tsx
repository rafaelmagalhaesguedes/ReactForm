import Logo from '../../assets/react.svg';
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {
  return (
    <header>
      <div className="wrapper-header">
        <div className="logo">
            <Link to="/">
              <img src={ Logo } alt="Logo" />
            </Link>
        </div>
        <div className="title">
          <h1>Sign!</h1>
        </div>
        <div className="nav">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </nav>
        </div>
      </div>
    </header>
  );
}