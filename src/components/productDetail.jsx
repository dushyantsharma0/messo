import React, {useContext, useEffect, useState } from 'react'

import {UserContext} from '../App'
import { BsCart2 } from "react-icons/bs";
import { FaAnglesRight } from "react-icons/fa6";
import { RxStarFilled } from "react-icons/rx";
 import Productdata from './productApi';
import Product from './product';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
  const {data}=useContext(UserContext)
  function senddata(index,item){
    localStorage.setItem('data', JSON.stringify(item))
   data(item)
   location.reload()
 }
  const alldata=Productdata
  const [foundExtraimg , setFoundExtraimg] = useState(false);
  const [FoundProductDetail, setFoundProductDetail] = useState(false);
  const [foundSize , setFoundSize] = useState(false);
  
  useEffect(() => {
     
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    if(newdata.extraimg){
      setFoundExtraimg(true)
      
    }
    if(newdata.ProductDetail){
      setFoundProductDetail(true)
    }
    if(newdata.SelectSize){
      setFoundSize(true)
      
    }
    
  
  }, [])
  const qdata=localStorage.getItem('data')
  
    const newdata=JSON.parse(qdata)
    
  const [imgsrc, setimgsrc] = useState(newdata.img);
  const catgdata=newdata.catg
   const populardata=[

   ]
    alldata.map((resp)=>{
      if( resp.catg==catgdata){
       populardata.push(resp)

       }
    })

  
  
 
  
    
  

  
  return (
   <>
   <br /><br />
    
     <div className=' pl-[30px] pr-[20px] gap-3 flex w-full justify-center'>
     <div>
       {foundExtraimg?<>
       {
         newdata.extraimg.map((result,key)=>{
          return <img key={key} onClick={()=>setimgsrc(result)} className='w-16' src={result} alt="" />
        })
       }
       </>:null
      
       }
        </div>
        {/* ---------sigle imgae line ---------- */}
        <div>
        <div   className=' overflow-hidden w-[400px] h-[400px] border' >
          <img   className='w-full h-full ' src={imgsrc} alt="" />
        </div>
        <br />
     <div className='flex gap-2'>
     <Link to={"/login"}>
     <button  className=' rounded-[5px] flex items-center gap-3 text-xl border py-2 px-10 border-[purple]'>
           <BsCart2 className='text-[purple]' /> Add To Cart</button>
     </Link>
       <Link to={"/login"}>

       <button className='flex items-center gap-3 bg-[#9F2089] px-10 rounded-[5px] py-[10px] text-white' > <FaAnglesRight/>Buy now</button>
       </Link>
     </div>
<br />
<hr />
<br />

        </div>
        <div className='w-[45%]'>
          {/*------------------ details  all -----------  */}
           <div className=' w-[100%] h-max  border rounded-[5px] p-5' >
                <h1 className=' uppercase text-[#696767] text-xl'>{newdata.name}</h1>
                <h1 className='mt-4 text-2xl font-[700]'>{newdata.price}</h1>
                
                <div className='flex items-center gap-4'>
                <div className=' mt-4 rounded-full px-3 flex items-center bg-[#038D63] text-[white] w-max'  > 
                        <h1>{newdata.rating}  </h1>
                        <RxStarFilled/>
                    </div>
                    <h1 className='mt-3 text-[13px] text-[#555353]'>{newdata.reviews}</h1>
                </div>
                <h1 className=' mt-3 bg-[#f5f1f1] w-max px-3 rounded-full text-[#535252]'>{newdata.isfree}</h1>
           </div>
           {
             foundSize?<>
             <div className=' mt-3 w-[100%] h-max  border rounded-[5px] p-5'>
                <h1 className='font-[700] text-xl' >Select Size </h1>
                <br />
                <div className='flex gap-6 flex-wrap ' >
                {
                  newdata.SelectSize.map((result,i)=>{
                   
                    return (
                      <>
                     
                      <h1  key={i}  className='  cursor-pointer rounded-full  border border-[black] px-4 py-1 text-[#706d6d]' >{result}</h1>
                      
                      </>
                    )
                  })
                }
                    </div>
             </div>
             </>:null
         }

         {
             FoundProductDetail?<>
             <div className=' mt-3 w-[100%] h-max  border rounded-[5px] p-5'>
                <h1 className='font-[700] text-xl' >Product Details</h1>
                {
                  newdata.ProductDetail.map((result,key)=>{
                    return <p className='text-[#706d6d]' key={key}>{result}</p>
                  })
                }

             </div>
             </>:null
         }
        </div>
     </div>
     <br />
     <h1 className=' ml-5 text-[20px] font-[600]' >People also viewed</h1>
     <div className='flex gap-3 flex-wrap ' >
   {
      populardata.map((resp,index)=>{
        return(
          <Link onClick={()=>senddata(index,resp)} key={index} to={"/ProductDetail"} > <Product name={resp.name} key={index} price={resp.price} brforeDoscount={resp.brforeDoscount} off={resp.off} isfree={resp.isfree} rating={resp.rating} img={resp.img}/> </Link>
        )
      })
   }
   
   
     </div>
     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
   </>
  )
}

export default ProductDetail