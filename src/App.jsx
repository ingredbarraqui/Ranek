import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Form/Login/Login.jsx';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App
