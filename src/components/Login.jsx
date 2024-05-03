import React, { useEffect,useState, useRef } from 'react';
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from 'react-router-dom'
import Navbar from './navbar';

const Login = () => {
  const navigation = useNavigate();
  

  const notify = () => toast.success("Otp send Successfully",{
    position: "top-center",
    autoClose: 3000,
    
    
  });

  const notify2 = () => toast.error('invalid Otp',{
    position: "top-center",
    autoClose: 3000,
    
    
  });
  const notify3 = () => toast.success('otp verified successfully',{
    position: "top-center",
    autoClose: 3000,
    
    
  });

  const [email, setEmail] = useState("");
  const [swo, setSwo] = useState(false);
  const [otpShow, setOtpShow] = useState(true);
  const inputs = Array.from({ length: 6 }, () => useRef(null));
  useEffect(() => {
    if(localStorage.getItem('nIgOlSi')){
      navigation('/')
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

     

  }, [])

  const continueBtn = () => {
    if (!email) {
      setSwo(true);
    }
    if (email) {

      fetch('https://messobackend.vercel.app/register',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
     }).then((resp)=>resp.json().then((data)=>console.log(data)))
           localStorage.setItem('email', email)
      
      notify()
      setTimeout(() => {
        setOtpShow(false);
      }, 3000);
    }
  };


  

 function checkOtp(e){
    if(e.length==6){
      fetch('https://messobackend.vercel.app/login',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: localStorage.getItem('email'),
          otp: e
        })
       }).then((resp)=>resp.json().then((data)=>{
            if(data.sucess==false){
  notify2()
            }else{
              notify3()
              
              localStorage.setItem('nIgOlSi','syesithresusinIgOlSi')
              setTimeout(() => {
                navigation('/')
              }, 3000);
            }

       }))
       
     
    }
    
  
 }


  return (
    <>
    <Navbar/>
    <div className=' mt-[-70px] pt-10 pb-20 w-full flex justify-center h-[max-content bg-[#FDEBEF]'>
      <div className='loginform'>
        <img src="https://images.meesho.com/images/marketing/1661417516766.webp" alt="" />
        <div className='w-full h-max pl-14 pt-10'>
          <h1 className='text-xl font-[500] tracking-[-0.9px]'>Sign Up to view your profile</h1>
          <br />
          {otpShow ? (
            <>
              <div className='flex gap-4 text-[#de8383]'>
                <p className='text-[#ddd]'>Country</p>
                {!swo ? <p className='text-[13px]'>Email id</p> : null}
              </div>
              <div className='flex gap-5'>
                <p>India</p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className='textgmail'
                  placeholder='Email Id'
                />
              </div>
              {swo ? <p className='ml-[50px] text-[13px] text-[red] disp1'>Enter a valid Email Id</p> : null}
              <br />
              <button className='ml-[-30px] loginbtn' onClick={continueBtn}>Continue</button>
          <ToastContainer/>
            </>
          ) : (
            <>
              <p className=' cursor-pointer text-[purple] underline' onClick={()=>setOtpShow(true)} >CHANGE EMAIL</p>
              <br />
             
               <div className='ml-14' >
               <input onInput={(e)=>checkOtp(e.target.value)} type="text" className=' outline-none    tracking-[30px] w-[250px]' maxLength={6} />
               <div className='  w-[200px] h-[30px] flex gap-[25px] ' >
                <div className='bg-[#0c0c0c] w-[30%] h-[2%]'></div>
                <div className='bg-[black] w-[30%] h-[2%]'></div>
                <div className='bg-[black] w-[30%] h-[2%]'></div>
                <div className='bg-[black] w-[30%] h-[2%]'></div>
                <div className='bg-[black] w-[30%] h-[2%]'></div>
                <div className='bg-[black] w-[30%] h-[2%]'></div>
               </div>
               </div>
               <ToastContainer/>
               <h1 className='text-xl text-center font-[600]'>Enter Your OTP</h1>
            </>
          )}
          
        </div>
        <br /><br /><br /><br />
        <p className='text-center'>By continuing, you agree to Meesho’s</p>
        <p className='text-center'>
          <span className='text-[#9f2089]'>Terms & Conditions</span> and <span className='text-[#9f2089]'>Privacy Policy</span>
        </p>
      </div>
    </div>
    </>
  );
};

export default Login;
