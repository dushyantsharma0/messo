import React ,{ useEffect,useState }from 'react'
import { Link } from 'react-router-dom';


const CartHeader = () => {
    const [numbering, setnumbering] = useState(1);
    useEffect(() => {
      if(localStorage.getItem('cart')){
        setnumbering(1)
      }
    }, [])
    if(setnumbering==1){

    }
  return (
    <>
    <div className='p-5 flex items-center' >
    <img className='w-[160px]' src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="" />
   <div className='flex items-center  w-full justify-center ' >
    
    <div style={{border:'2px solid #6A92F8',color:'#6A92F8'}} className=' relative round flex justify-center items-center ml-[-170px]' >1 
    <p className=' absolute bottom-[-25px]' >cart</p></div>
       
    <div style={numbering>1?{background:' #6A92F8'}:null}  className='line '></div>
    <div style={numbering>1?{border:'2px solid #6A92F8',color:'#6A92F8'}:null}  className='round relative  flex justify-center items-center' >2
    <p className=' absolute bottom-[-25px]' >Address</p>
    </div>
    <div style={numbering>2?{background:' #6A92F8'}:null} className='line'></div>
    <div style={numbering>2?{border:'2px solid #6A92F8',color:'#6A92F8'}:null} className='round relative  flex justify-center items-center' >3
    <p className=' absolute bottom-[-25px]' >Payment</p>
    </div>   
    <div style={numbering>3?{background:' #6A92F8'}:null} className='line'></div>
    <div style={numbering>3?{border:'2px solid #6A92F8',color:'#6A92F8'}:null} className='round relative  flex justify-center items-center' >4
    <p className=' absolute bottom-[-25px]' >Summary</p>
    </div>
   </div>
   </div>
   <hr />
   <br /><br /><br />
   
    </>
  )
}

export default CartHeader