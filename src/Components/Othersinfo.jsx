import React from 'react'

export default function Othersinfo({formData,setFormData}) {
  return (
    <div>
     <input type="text" placeholder='Nationality'
      value={formData.nationality}
      onChange={(e)=>{
        setFormData({...formData,nationality:e.target.value})
       }} />
     <input type="text" placeholder='Country'
      value={formData.country}
      onChange={(e)=>{
        setFormData({...formData,country:e.target.value})
       }} />
    </div>
  )
}
