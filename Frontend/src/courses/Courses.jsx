import React from 'react'
import Newbar from '../Components/Newbar'
import Footer from '../Components/Footer'
import Course from '../Components/Course'

function Courses() {
  return (
    <>
    <Newbar/>
    <div className='min-h-screen'>
    <Course/>
    </div>
    <Footer/>

    </>
  )
}

export default Courses
