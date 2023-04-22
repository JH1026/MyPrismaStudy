import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserPage from './pages/UserPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
