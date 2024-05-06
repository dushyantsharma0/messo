import React, { useContext,useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import CartHeader from './cartHeader';
import { UserContext } from '../App';
import {useNavigate} from  'react-router-dom'

import { RxCross2 } from "react-icons/rx";
import TemporaryDrawer from './sidebar';
const Cart = () => {
  const navigate=useNavigate()
  const [isempity, setisempity] = useState(true);
  const {cartData,cartHeaderCount}=useContext(UserContext)
  const alldata=[]
  const [mdata, setdata] = useState();
  const [show, setshow] = useState(true);
  const [canshow, setcanshow] = useState(true);
  const totalPrice=[]
  
  
  useEffect(() => {
  if(!localStorage.getItem('email')){
    navigate('/')
  }
if(localStorage.getItem('cartempty')){
  setcanshow(false)
}
    // todo: fetching cart data 
if(localStorage.getItem('messo_id')){
  
  fetch('https://messobackend.vercel.app/cartshow',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: localStorage.getItem('messo_id'),
      
    })
   }).then((resp)=>resp.json()).then((data)=>{
     
     data.data.map((resp)=>{
       alldata.push(resp)
       setdata(alldata)
       localStorage.setItem('cartempty',false)
       setshow(true)
       console.log(resp)
       
      
     })
     
   })
 }
  
  }, [])
 
    function next(){
      cartHeaderCount(2)
      navigate('/address')
    }

  return (

   <>
   <CartHeader/>
   
   
  
    {
      show?<>
      

      {
      mdata!=undefined ?<>
    <div className='flex'>
    <div className='allcartleft'>
      <div className='flex gap-3 text-xl' >
        <h1 className='  border-r-2 pr-2' >Cart</h1> 
        <h1 className='text-[#656161]'>{localStorage.getItem('totalquantity')} Item</h1>
      </div>
           {
            mdata.map((resp=>{
              let price=resp.price.split('₹')
              let newprice=Number(price[1])
              let quantity=resp.quantity
              totalPrice.push(newprice*quantity)
              return(
                <>
                <div key={resp._id} className=' cartfistdiv'>
                  <div className='flex  justify-between px-2  '>
                  <img className='w-14'  src={resp.img} alt="" />
                  <div>
                  {resp.name.length>20?<h1 className='font-[600] text-xl'>{resp.name.slice(0, 30) + "..."}</h1>:<h1 className='font-[600] text-xl' >{resp.name}</h1>}
                  <h1 className='text-[blue] font-[500]'>{resp.price}</h1>
                  </div>
               
               <h1  className='   cursor-pointer text-xl font-[600] text-[purple]' ><TemporaryDrawer data={resp}/></h1>
               
                  </div>
                  
                  <h1 className='text-center'>All issue easy returns allowed</h1>
                  <div>
                   <h1 className='text-xl text-center font-[700]' >Qty:{resp.quantity}</h1>
                   <br />
                   <h1 className='flex items-center gap-1 pl-20 font-[700]' >REMOVE <RxCross2/> </h1>
                  </div>
                  <br />
                  <hr />
                  <div className='  flex justify-between px-3 text-[#494848]' >
                    <h1>Sold by: Meesho</h1>
                    <h1>{resp.isfree}</h1>
                  </div>
            </div>
                </>
              )
            }))
           }

      </div>
        {/* //todo : start right section here */}
      <div className='ml-6  w-[350px]'>
      <h1 className='text-xl mb-2'>Price Details</h1>
      <div className='flex items-center justify-between '>
      <h1 className='text-[#625e5e] text-xl  textunderline'>Total Product Price</h1>
        <h1 className='text-xl font-[700] '> + ₹{totalPrice.reduce((acc, curr) => acc + curr, 0)}</h1>
      </div>
      <br />
      <hr />
      <div className='flex   justify-between'>
          <h1 className=' text-[#222121] text-xl '>Order Total</h1>
          <h1 className='text-xl font-[700] '>  ₹{totalPrice.reduce((acc, curr) => acc + curr, 0)}</h1>

         </div>
         <br />
         <p className=' p-3 bg-[#F8F8FF] text-xs text-center'>Clicking on ‘Continue’ will not deduct any money</p>
     <br />
      <button onClick={next}  className='loginbtn'>Continue</button>
      <img src="https://images.meesho.com/images/marketing/1588578650850.webp" alt="" />
      </div>
        
    </div>
      
      
      </>:canshow?<>
      <div className='flex justify-center' >
       
       <img   src="https://www.meesho.com/mcheckout/build/static/media/empty-cart.b87f87595dfaa8606bfe.png" alt="" />
       
   </div>
   <br />
   <p className=' text-center text-xl font-[600]'>Your cart is empty</p>
   <div className='flex justify-center'>
   <Link to={'/'}><button className=' btnProduct'>View Products</button></Link>
   </div>
  
    <div>
    
    </div>
      </>:null
    }

      
      </>:null
    }
   
   </>
  )
}

export default Cart