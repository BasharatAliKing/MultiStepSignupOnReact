import React,{useState} from 'react'
import Signupinfo from './Signupinfo';
import Personalinfo from './Personalinfo';
import Othersinfo from './Othersinfo';
import "../Utilities/App.css";
export default function Form() {
  const [page,setPage]=useState(0);
  const [formData,setFormData]=useState({
    email:"",
    password:"",
    confirmpassword:"",
    firstname:"",
    lastname:"",
    phone:"",
    nationality:"",
    country:""
  });
  const PageTitle=["SignUp","Personal Info", "Others" ];
  const pageDisplay=()=>{
    if(page==0){
       return <Signupinfo formData={formData} setFormData={setFormData} />
    }else if(page==1){
      return <Personalinfo formData={formData} setFormData={setFormData} />
    }
    else if(page==2){
      return <Othersinfo formData={formData} setFormData={setFormData} />
    }
   

  }
  return (
    <>
      <div className="form">
        <div className="progressbar">
          <div className='king' style={{width:page===0 ? "33.3%" : page==1 ? "66.6%" : "100%"}}></div>
        </div>
        <div className="form-container">
          <div className="header">{PageTitle[page]}</div>
          <div className="body">{pageDisplay()} </div>
          <div className="footer">
            <button disabled={page==0} onClick={()=>{setPage((currpage)=>currpage-1);
            }}>Prev</button>
            <button  onClick={()=>{
              if(page===PageTitle.length-1){
                     alert("Data Submitted!");
                     console.log(formData);
              }else{
                setPage((currpage)=>currpage +1)}}
              }
              >{page===PageTitle.length -1 ?"Submit" : "Next"}</button>
          </div>
        </div>
      </div>
    </>
  )
}
