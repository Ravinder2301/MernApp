import React from 'react'
import { Link  } from 'react-router-dom'
import { BsArrowLeftCircleFill } from "react-icons/bs";
// import './BackButton.css'

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='flex'>
      <Link
       to={destination}
       className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'>
          {/* <button class="back-button">Back</button> */}
        <BsArrowLeftCircleFill className='text-4xl bg-blue-800' />
      </Link>
    </div>
  )
}

export default BackButton
