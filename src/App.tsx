import Logo from './assets/react.svg';
import Form from './components/Form';

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

          <Form />

          <div className="image-section">
            <img src={ Logo } ></img>
          </div>
        </section>
      </main>
      
      <footer>
      </footer>

    </div>
  )
}

export default App
