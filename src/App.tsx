import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

  return (
    <div className="container">
      
      <Header />
      
      <main>
        <section>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/login" element={ <Login />} />
            <Route path="/register" element={ <Register /> } />
          </Routes>
        </section>
      </main>
  
    </div>
  )
}

export default App
