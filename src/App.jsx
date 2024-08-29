import { useState } from 'react'
import Menu from './Menu'
import Sidebar from './Sidebar'
import Header from './Header'
import StudentCount from './Students'
function App() {

  return (
    <>
    <div className="row">
      <div className="col-1 ">
      <Sidebar />
      </div>
      <div className="col-11 position-absolute ms-5 w-100">
        <div className='ms-5'>
        <Header/>
        </div>
      <StudentCount />
      <Menu />
      </div>
    </div>
  
   
    </>
  )
}

export default App
