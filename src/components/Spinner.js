import React from 'react'
import spinnerImage from '../spinnerImage.gif'

export default function Spinner() {
  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      <img src={spinnerImage} alt="spinner" style={{height:"150px" ,width:"150px"}}/>
    </div>
  )
}
