
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Shared/Footer/Footer'
import Navbar from './Components/Shared/Navbar/Navbar'

function App() {

  return (
    <div className='max-w-[100rem] mx-auto lg:px-8 px-1 dark:bg-gray-600 dark:text-white'>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
