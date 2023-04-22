import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserPage from './pages/UserPage'
import { SWRConfig } from 'swr'

function App() {

  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(`${import.meta.env.VITE_API_PATH}${resource}`, init).then(res => res.json())
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </SWRConfig>
  )
}

export default App
