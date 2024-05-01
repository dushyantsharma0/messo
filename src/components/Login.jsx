import React, { useEffect,useState, useRef } from 'react';
import Button from '@mui/material/Button';

const Login = () => {
  const [email, setEmail] = useState("");
  const [swo, setSwo] = useState(false);
  const [otpShow, setOtpShow] = useState(true);
  const inputs = Array.from({ length: 6 }, () => useRef(null));
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [])

  const continueBtn = () => {
    if (!email) {
      setSwo(true);
    }
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if(index==5){
        
    }
    if (value && index < inputs.length - 1) {
        console.log(index)
      inputs[index + 1].current.focus();
      
    }
    
    
    
  };
  
  const handleKey = (index, e) => {
    const value = e.target.value;
    if (e.key == 'Backspace' &&index>0 ) {
        console.log(index)
        
      inputs[index -1].current.focus();
      
    }
    
    
  };
 


  return (
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
            </>
          ) : (
            <>
              <p>CHANGE EMAIL</p>
              <br /><br /><br />
              {inputs.map((input, index) => (
                <input
                className=' inputotp'
                  key={index}
                  type="text"
                  maxLength={1}
                  ref={input}
                  onKeyDown={(e)=>handleKey(index,e)}
                  onInput={(e) => handleChange(index, e)
                
                }
                />
              ))}
            </>
          )}
          <button className='ml-[-30px] loginbtn' onClick={continueBtn}>Continue</button>
        </div>
        <br /><br /><br /><br />
        <p className='text-center'>By continuing, you agree to Meesho’s</p>
        <p className='text-center'>
          <span className='text-[#9f2089]'>Terms & Conditions</span> and <span className='text-[#9f2089]'>Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
