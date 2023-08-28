import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Admin from './pages/Admin';

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <section>
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/login" element={ <Login />} />
              <Route path="/register" element={ <Register /> } />
            </Routes>

            <Routes>
              <Route path="/admin" element={ <Admin /> } />
            </Routes>

          </section>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default App
