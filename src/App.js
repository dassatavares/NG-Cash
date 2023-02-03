import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Componets 
import Login from './pages/login/Login.js'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login /> } />
          {/* <Route path='/home' element={ <Home /> } /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
