import React from 'react';


export default function Signupinfo({formData,setFormData}) {
  return (
    <>
     <div className="signup-container-form">
      <input type="text" placeholder='Email....'  
      value={formData.email} 
      onChange={(e)=>{
        setFormData({...formData, email:e.target.value});
      }}
       />
      <input type="text" placeholder='Enter your Password'
      value={formData.password}
      onChange={(e)=>{
        setFormData({...formData,password:e.target.value})
      }} />
      <input type="text" placeholder='Confirm Password'
      value={formData.confirmpassword}
      onChange={(e)=>{
        setFormData({...formData,confirmpassword:e.target.value})
      }} />
     </div>
    </>
  )
}
