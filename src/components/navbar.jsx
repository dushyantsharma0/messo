import React, { useContext,useEffect, useState } from 'react'
import { IoIosPhonePortrait } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { CiLock } from "react-icons/ci";

import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from './header';
import { UserContext } from '../App';

const Navbar = () => {
  const { filter } = useContext(UserContext);
  const location = useLocation();
  const [showlogin, setshowlogin] = useState(true); // Assuming useState is imported
  const [showAllbars1, setshowAllbars] = useState(false);
  const [showAllbars2, setshowAllbars2] = useState(false); // Assuming useState is imported
 const [man, setman] = useState(false);
 const [inputvalue , setInputvalue] = useState("");
  
  useEffect(() => {
    if(location.pathname == '/login'){
      setshowlogin(false);
      console.log('yes');
    } else {
      setshowlogin(true);
      console.log('no');
    }
  }, [location.pathname]); 

 
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      
      filter(inputvalue)

      
    }
  };
 
   
  
  


  return (
   <div>
    <div>

    <div className=' fixed z-30 w-full'>
        <div className=' bg-white w-full  p-4 flex justify-between text-[17px]' >
            <img className='w-[150px]  ' src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg" alt="" />
            <div className='  relative' >
            <CiSearch className=' absolute text-[#acabab] top-2 text-3xl left-1  '/> 
               <input onKeyPress={handleKeyPress}  value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}  type="search" className=' font-[500] outline-none 
                rounded-[5px] h-12 w-[400px] border border-[#211f1f]  pl-10'
                  placeholder='Try Saree, Kurti or Search by Product Code' />
            </div>
            <div className='flex gap-10  justify-center items-center' >
               <div className=' relative'>
               <div className=' showextrahover flex justify-center items-center py-2 pr-2 rightboder' >  <IoIosPhonePortrait className='text-2xl'/> <h1 className='  cngcolor' >Download App</h1></div>
               <div className=' zindex  z-40  box showextra ' >
                
                <p className=' text-[#555454] text-xl ' >Download From</p>
                <br />
                <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pli=1" target="_blank">

                <img className=' cursor-pointer' src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="" />
                </a>

                <br />
                <a href="https://apps.apple.com/us/app/meesho-online-shopping/id1457958492" target="_blank">
  <img className='cursor-pointer' src="https://images.meesho.com/images/pow/appstore-icon-big.png" alt="" />
</a>
              </div>
               </div>
               <div className='cngcolor flex justify-center items-center py-2 pr-2 rightboder'><h1>Become a Supplier</h1></div>
               <div className='cngcolor flex justify-center items-center py-2 pr-2 rightboder'><h1>Newsroom</h1></div>
                
                  {
                    showlogin?<>
                      <div className=' relative'>
                    <div className=' showloginhover cngcolor flex  flex-col justify-center items-center ' > <CgProfile className='text-2xl'/>
               <h1>Profile</h1> </div>
               <div className='showlogin ' > 
               <p className='text-[20px] font-[600] '>Hello User</p>
               <p className='text-[12px] mb-4 '>To access your Meesho account</p>
               
               <Link to={'/login'}> <button className='loginbtn mb-4'>Sign up</button></Link>
               <hr />
               <div className='flex  items-center gap-3 font-[600]'> <CiLock/> <p>My Orders</p></div>
               </div>
                    </div>

               <div className='cngcolor flex flex-col justify-center items-center '> <CiShoppingCart className='text-2xl' /><h1>Cart</h1></div>
                    </>:null
                  }
            </div>

        </div>
        
      {
        showlogin?<>
          <div className=' w-full bg-[white] py-5 font-[700] text-[16px] flex gap-10 justify-center' >
        <div className=' pb-6' onMouseEnter={()=>setshowAllbars(true)} onMouseLeave={()=>setshowAllbars(false)}>Women Ethnic </div>
        
        <div onMouseEnter={()=>setshowAllbars2(true)} onMouseLeave={()=>setshowAllbars2(false)} >Women Western</div>
        <div onMouseEnter={()=>setman(true)} onMouseLeave={()=>setman(false)}>Men</div>
        <div>Kids</div>
        <div>Home & Kitchen</div>
        <div>Beauty & Health</div>
        <div>
Jewellery & Accessories</div>
        <div>Bags & Footwear</div>
        <div>Electronics</div>
        
        </div>
        </>:null
      }
        
        <hr />
      {showAllbars1?<>
        <div onMouseEnter={()=>setshowAllbars(true)} onMouseLeave={()=>setshowAllbars(false)} >
        <Header
       data={{heading:[["All Women Ethnic","View All"]
       ,
       ["Sarees",'All Sarees',"Silk Sarees","Cotton Silk Sarees",
       'Cotton Sarees',"Georgette Sarees","Chiffon Sarees","Satin Sarees","Embroidered Sarees"]
       ,
       ["Kurtis","All Kurtis","Anarkali Kurtis","Rayon Kurtis","Cotton Kurtis","Embroidered Kurtis"]
       ,
       ["Kurta Sets","All Kurta Sets"],
       ["Suits & Dress Material","All Suits & Dress Material","Cotton Suits","Embroidered Suits","Chanderi Suits"]
       
       ,
       ["Other Ethnic","Blouses","Dupattas","Lehanga","Gown","Ethnic Bottomwear"]
       ]}}
/>  
       </div>
      </>:null
      
    }
    {showAllbars2?<>
      <div onMouseEnter={()=>setshowAllbars2(true)} onMouseLeave={()=>setshowAllbars2(false)} >
        <Header
       data={{heading:[["Topwear","Tops","Dresses","Sweaters","Jumpsuits"]
       ,
       ["Bottomwear",'Jeans',"Jeggings","Palazzos" ,"Shorts","Skirts"]
       ,
       ["Innerwear","Bra","Briefs" ]
       ,
       
       ["Sleepwear","Nightsuits","Babydolls"]
       ]}}
/>  
       </div>
    </>:null}


    {man?<>
      <div onMouseEnter={()=>setman(true)} onMouseLeave={()=>setman(false)} >
        <Header
       data={{heading:[["Topwear", "Tops", "Dresses" ,"Sweaters"]
       ,
       ["Bottom", "Wear", "Track" ,"Pants", "Jeans", "Trousers"]
       ,
       ["Men Accessories", "All Men Accessories" , "Watches", "Belts" , "Wallets", "Jewellery",  "Sunglasses" ,"Bags" ]
       ,
       
       ["Men Footwear","Casual Shoes" , "Sports Shoes" , "Sandals" , "Formal Shoes"],
       ["Ethnic Wear","Men Kurtas", "Ethnic Jackets"],
       ["Inner & Sleep Wear", "All Inner & Sleep Wear", "Vests"]
       ]}}
/>  
       </div>
    </>:null}
    </div>


    </div>
    <div className='w-full h-[140px]'></div>
        
        <hr />
   </div>
  )
}

export default Navbar