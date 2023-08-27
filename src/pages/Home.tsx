import { Link } from 'react-router-dom';
import QRCode from '../assets/images/qr-transparent.png';
import '../components/Home/Home.css';

function Home() {
  return (
    <div className="container-home">
      <div className="infos-home">
        <h1 className="title-home">Hello World!</h1>
        <h2 className="subtitle-home">
          
          Welcome to the user registration system. 
          Register a user and log in to the system. 
          The system has security for validating passwords 
          and other form data, using Typescript and React 
          JS as its main technology, in addition to NodeJS 
          along with Javascript and CSS.

        </h2>

        <div className="buttons-home">
          <Link className="button" to="/login">Login</Link>
          <Link className="button" to="/register">Register</Link>
        </div>
      </div>
      <div className="image-home">
        <img src={ QRCode } alt="coffe and code" />
      </div>
    </div>
  )
}

export default Home