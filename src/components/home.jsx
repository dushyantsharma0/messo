import React, { useEffect,useContext, useState } from 'react'
import SectionImg from './sectionImg'
import Sorting from './Sorting'
import Product from './product'
 import Productdata from './productApi'
 import { Link } from 'react-router-dom'
 
 import {UserContext} from '../App'




const Home = () => {
   const {count,data,FilterData,Gender,FilteredPrice}=useContext(UserContext)
   const [productdata, setproductdata] = useState(Productdata);
   const [showmain , setShowmain] = useState(true);
  

           let searchProduct=[]
  const allname=[]

const nameFilter=productdata.map((resp)=>{
     allname.push(resp.name)
     
})
useEffect(() => {
  
  if(FilterData!=undefined) {
    if(FilterData==""){
      
      setShowmain(true)
      console.log('empity')
    }
   
    Productdata.map((resp) => {
      if (resp.name.toLowerCase().includes(FilterData.toLowerCase())) {
        
         searchProduct.push(resp)

         setproductdata(searchProduct)
         setShowmain(false)
      }
    });
    
}

if(Gender!=undefined){
  
  Productdata.map((resp)=>{
    
    if(Gender==resp.gender){
        console.log(resp)
        
        searchProduct.push(resp)
        setproductdata(searchProduct)
        setShowmain(false)
        
    }
  })
}

if (FilteredPrice !== undefined) {
  let newFilter = FilteredPrice.split("₹");
  let newFilter1 = parseInt(newFilter[1].replace(/\D/g, ""));
  let filteredProducts = Productdata.filter((resp) => {
    return parseInt(resp.price.split("₹")[1].replace(/\D/g, "")) < newFilter1;
  });
   filteredProducts.map((resp)=>{
    searchProduct.push(resp)
     setproductdata(searchProduct)
     setShowmain(false)
   })
  
  
  setShowmain(false)
}

}, [FilterData,Gender,FilteredPrice])

  

function senddata(index,item){
   localStorage.setItem('data', JSON.stringify(item))
  data(item)
}
  return (
    
    <div  >
        <br /><br />
     {
      showmain?<>
        <div className='flex justify-center'>
       <div className=' w-[80%] bg-[#ddd] flex justify-center gap-5 items-center '> 
            <div  >
                <h1 className=' myfont font[900] text-5xl'>Lowest Prices</h1>
                <h1 className=' myfont font[900] text-5xl'>Best Quality Shopping</h1>
                <div className=' bg-white flex gap-20  items-center justify-center'>
                    <div className='flex' >
                        <img src="https://images.meesho.com/images/pow/freeDelivery_jamun.svg" alt="" />
                      <div>
                      <p>Free </p>
                      <p>Delivery</p>
                      </div>
                    </div>
                    <div className='flex'>
                        <img src="https://images.meesho.com/images/pow/cod_jamun.svg" alt="" />
                      <div>
                      <p>Cash on </p>
                      <p>Delivery</p>
                      </div>
                    </div>
                    <div className='flex'>
                        <img src="https://images.meesho.com/images/pow/easyReturns_jamun.svg" alt="" />
                     <div>
                     <p>Easy  </p>
                      <p>Returns</p>
                     </div>
                    </div>
                </div>
                <br /><br />
                <button className='loginbtn'>Download the Meesho App</button>
            </div>
            <img src="https://images.meesho.com/images/marketing/1712553990685_512.webp" alt="" />
        </div>
       
       </div>


       {/* second section  */}
<br /><br />

     <SectionImg/>
      
      </>:null
     }
     <div className='flex gap-2 mt-3' >
     <Sorting/> 
    <div className='flex gap-3 mt-9 flex-wrap' >
      
   {productdata.map((item,index)=> <Link onClick={()=>senddata(index,item)} key={index} to={"/ProductDetail"} > <Product name={item.name} key={index} price={item.price} brforeDoscount={item.brforeDoscount} off={item.off} isfree={item.isfree} rating={item.rating} img={item.img}/> </Link> )}     
    </div>

     </div>

    </div>
    
  )
}

export default Home