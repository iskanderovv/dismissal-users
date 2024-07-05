import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/home/Home'
import DismissalUsers from './routes/dismissal-users/DismissalUsers'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/dismissal' element={<DismissalUsers />} />
      </Routes>
    </>
  )
}

export default App
