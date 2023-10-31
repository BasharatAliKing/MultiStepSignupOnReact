import React from 'react'

export default function Personalinfo({formData,setFormData}) {
  return (
    <div>
     <div className="personalinfo-container-form">
      <input type="text" placeholder='First Name'
      value={formData.firstname}
      onChange={(e)=>{
        setFormData({...formData,firstname:e.target.value})
      }} />
      <input type="text" placeholder='Last Name'
       value={formData.lastname}
       onChange={(e)=>{
         setFormData({...formData,lastname:e.target.value})
        }} />
      <input type="phone" placeholder='Enter your Phone'
       value={formData.phone}
       onChange={(e)=>{
         setFormData({...formData,phone:e.target.value})
        }} />
     </div>
    </div>
  )
}
