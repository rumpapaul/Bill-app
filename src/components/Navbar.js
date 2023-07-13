import React from 'react'

export default function Navbar() {
  return (
   <>
      <div className="navbar">
        DIGITAL BILL
         <div className="time">
          {new Date().getMonth()+1+ "/" +new Date().getDate()+ "/" + new Date().getFullYear()}
         </div> 
      </div>
   
   </>
  )
}
