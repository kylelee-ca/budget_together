import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
  return (
    <Router>
       <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={(<p>Main</p>)} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
        </Routes>
       </div>  
    </Router>
   
  )
}

export default App
