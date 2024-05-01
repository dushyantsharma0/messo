import React, { useContext,useState } from 'react'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { UserContext } from '../App';

const Sorting = () => {
    const { FilterGender,FilterPriceList } = useContext(UserContext);
    const [dropone, setdropone] = useState(false);
    const [showallCatagary, setshowallCatagary] = useState(true);
    const [dropdown2 , setDropdown2] = useState(false);
    const [dropdown3 , setDropdown3] = useState(false);
    const [dropdown4 , setDropdown4] = useState(false);
    const Category=[
        "Women T-shirts","Women T-shirts","Bedsheets","Bike Covers","Blouses","Earrings & Studs","Hair Accessories","Hair Oils","Idols & Figurines","Jewellery Set","Kids - Girls Frocks & Dresses","Kids Toys","Kitchen Storage","Lunch Boxes","Lunchbox & Bottles","Mangalsutras","Men Analog Watches","Men Jewellery","Men Shirts","Men T-shirts","Women Panty & Briefs"   
    ]
    const pricelist=[
        "Under ₹ 149","Under ₹ 199","Under ₹ 249","Under ₹ 299","Under ₹ 349","Under ₹ 399","Under ₹ 449","Under ₹ 499","Under ₹ 99","₹ 0 - ₹ 99","₹ 100 - ₹ 149","₹ 150 - ₹ 199"
    ]
    const ratingList=[
        "2.0 and above","3.0 and above","3.5 and above","4.0 And Above"
    ]


    function setGender(index){
        FilterGender(index)
    }
 function FilterPrice(index){
    
    FilterPriceList(index)
 }

  return (
    <>
   <div className='  ml-3'>
   <br />
    <div className='text-3xl mb-2 '>Products For You</div>
    
    <div className=' rounded-[10px] flex gap-2 pl-2 py-3 border w-[270px]' >
        <h1 className='text-[#585656]' >Sort by :</h1>
        <select className=' outline-none' >
        <option value="1">Relevance</option>
        <option value="2">New Arrivals</option>
        <option value="3">Price (High to Low)</option>
        <option value="4">Ratings</option>
        <option value="5">Discount</option>
       
    </select>
    </div>
    {/* FILTERS */}
    <div className=' mt-2 rounded-[10px] pl-2 border w-[270px]' >
        <h1  >FILTERS</h1>
        <p className=' text-[#585656]'>1000+ Products</p>
        <hr />
      <div className=' mb-2 flex  justify-between text-[20px]'>
        {/*todo {-----------Catagerystart-------} */}
      <h1> Category</h1>
      {
        dropone?<IoMdArrowDropup onClick={() => setdropone(!dropone)} />:<IoMdArrowDropdown onClick={() => setdropone(!dropone)} />
      }
      </div>
       {
        dropone?<><input className='border' type="text" />
            
            {
                Category.map((item, index) => {
                  
                    if(showallCatagary){
                        if(index==8){
                            return(
                                <h1  onClick={()=>setshowallCatagary(false)} className=' cursor-pointer font-[600] text-[20px] text-[#7c005c]' >show more</h1>
                                
                            )
                        }
                        if(index<8)
                    return (
                        <div key={index} className='flex gap-2'>
                            <input type="checkbox" />
                            <p>{item}</p>
                        </div>
                    )
                    }else{
                        return (
                            <div key={index} className='flex gap-2'>
                                <input type="checkbox" />
                                <p>{item}</p>
                            </div>
                        )
                    }
                })
            }
  
        </>:null
       }
<hr />

       {/*todo {-----------Gender-------} */}
        <div className=' mb-2 mt-3 flex  justify-between text-[20px]'>
       
      <h1> Gender</h1>
{
    dropdown2?<IoMdArrowDropup onClick={() => setDropdown2(!dropdown2)} />:<IoMdArrowDropdown onClick={() => setDropdown2(!dropdown2)} />
}

      </div>
  {
    dropdown2?<>
     <div className='flex gap-3 flex-wrap'>
   <div onClick={()=>setGender("Boys")} className='genderCatagery'>Boys</div>
     <div onClick={()=>setGender("Girls")} className='genderCatagery'>Girls</div>
     <div onClick={()=>setGender("Man")} className='genderCatagery'>Man</div>
     <div onClick={()=>setGender("Women")} className='genderCatagery'>Women</div>
   </div>
    </>:null
  }
<hr />
  {/* -----------pricing start ------ */}
  <div className=' mb-2 mt-3 flex  justify-between text-[20px]'>
       
       <h1> Price</h1>
 {
    dropdown3?<IoMdArrowDropup onClick={() => setDropdown3(!dropdown3)} />:<IoMdArrowDropdown onClick={() => setDropdown3(!dropdown3)} />
 }
   

       </div>
       <div className='flex flex-wrap gap-2' >
       {
         dropdown3?<>
         {
             pricelist.map((item, index) => {
             if(index<7){
                return (
                    <div key={index} className='w-full '>
                        <div className='flex gap-2 border w-max p-2  rounded-[15px]' >
                        <input onClick={()=>FilterPrice(item)} type="checkbox" />
                        <p>{item}</p>
                        </div>
                    </div>
                )
             }
             if(index>7){
                 return (
                     <div key={index} className=' p-1  rounded-[15px] border w-[47%] flex gap-2'>
                         <input type="checkbox" />
                         <p>{item}</p>
                     </div>
                 )
             }
             })
         }
         
         </>:null
       }
       </div>
       {/* rating start  */}
       <hr />
       <div className=' mb-2 mt-3 flex  justify-between text-[20px]'>
       
       <h1> Rating</h1>
 {
    dropdown4?<IoMdArrowDropup onClick={() => setDropdown4(!dropdown4)} />:<IoMdArrowDropdown onClick={() => setDropdown4(!dropdown4)} />
 }


       </div>
       {
    dropdown4?<>
      <div>
      {
         ratingList.map((item, index) => {
             return (
                 <div key={index} className=' mt-2 flex gap-2 border w-max p-2  rounded-[15px]' >
                 <input type="checkbox" />
                 <p>{item}</p>
                 </div>
             )
         })
       }
      </div>
    </>:null
   }

    </div>
   </div>
    <br /><br /><br /><br /><br /><br />
    </>
  )
}

export default Sorting