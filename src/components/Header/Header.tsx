import Logo from '../../assets/react.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Header() {
  return (
    <header>
      <div className="wrapper-header">
        <div className="logo">
            <img src={ Logo }></img>
        </div>
        <div className="title">
            <h1>Sign!</h1>
        </div>
        <div className="nav">
            <nav>
              <Link to="/">Home</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <a><FontAwesomeIcon icon={ faGithub } size="2xl"/></a>
            </nav>
        </div>
      </div>
    </header>
  );
}