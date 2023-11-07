
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Shared/Footer/Footer'
import Navbar from './Components/Shared/Navbar/Navbar'

function App() {

  return (
    <div className='max-w-[100rem] mx-auto lg:px-8 px-1'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
