
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Component/Footer'
import Navsection from './Component/Navsection'

function App() {
  

  return (
    <>
   <Navsection></Navsection>
   <Outlet></Outlet>
   <Footer></Footer>
    </>
  )
}

export default App
