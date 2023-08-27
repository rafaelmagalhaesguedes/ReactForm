import Coffe from '../assets/images/mug-hot-solid-white.png';
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
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
      <div className="image-home">
        <img src={ Coffe } alt="coffe and code" />
      </div>
    </div>
  )
}

export default Home