import React, { useContext,useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import CartHeader from './cartHeader';
import { UserContext } from '../App';
import {useNavigate} from  'react-router-dom'


const Cart = () => {
  const navigate=useNavigate()
  const [isempity, setisempity] = useState(true);
  const {cartData}=useContext(UserContext)
  const alldata=[]
  const [mdata, setdata] = useState();
  
  useEffect(() => {
  if(!localStorage.getItem('email')){
    navigate('/')
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
       
      
     })
     
   })
 }
  
  }, [])
 
   

  return (

   <>
   <CartHeader/>
   
    
  
    {
      mdata!=undefined ?<>
      <div className='flex gap-3 text-xl' >
        <h1 className='  border-r-2 pr-2' >Cart</h1> 
        <h1 className='text-[#656161]'>{localStorage.getItem('totalquantity')} Item</h1>
      </div>
      
      
      </>:<>
      
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
      </>
    }
   
   </>
  )
}

export default Cart