import Logo from './assets/react.svg';
import RegisterUser from './components/RegisterUser';

function App() {

  return (
    <div className="container">
      <header>
        <div className="wrapper-header">
          <div className="logo">
            <img src={ Logo }></img>
          </div>
          <div className="title">
            <h1>Register</h1>
          </div>
          <div className="nav">
            <nav>
              <a>Login</a>
              <a>Register</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section>

          <RegisterUser />
          
        </section>
      </main>
      
      <footer>
      </footer>

    </div>
  )
}

export default App
