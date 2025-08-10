import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';
import Dashboard from './pages/home/Dashboard';
import Sessions from './pages/home/Sessions';
import Create from './pages/home/Create';
import ManageSessions from './pages/home/ManageSessions';
function App() {
  return (
    <>
      <div className="w-full h-full">
        <Router>

          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/sessions' element={<Sessions />} />
            <Route path='/create' element={<Create />} />
            <Route path='/managesessions' element={<ManageSessions />} />
          </Routes>

        </Router>
      </div>
    </>
  )
}

export default App;