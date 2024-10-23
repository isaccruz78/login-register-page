import Login from '../pages/login'
import Register from '../pages/register'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function AppRoutes() {
  return (
    <div className='all-routes'>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </Router>
    </div>
  )
}

export default AppRoutes