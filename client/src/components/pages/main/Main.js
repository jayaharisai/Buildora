import React from 'react'
import Navbar from '../navbar/Navbar'
import Dashboard from '../dashboard/Dashboard'

function Main() {
  return (
    <div className='body'>
        <div>
            <div>
                <div><Navbar/></div>
                <div><Dashboard/></div>
            </div>
        </div>
    </div>
  )
}

export default Main