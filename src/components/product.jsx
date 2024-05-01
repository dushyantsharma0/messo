import React from 'react';
import { useState } from 'react';
import { CiStar } from "react-icons/ci";
import { RxStarFilled } from "react-icons/rx";
const Product = (props) => {
    
    const productname = props.name;
    const displayProductName = productname.length > 19 ? productname.slice(0, 19) + "..." : productname;

    return (
        <>
            <div className='mainproduct'>
                <div className='flex h-[230px] justify-center'>
                    <img className='  w-[80%]' src={props.img} alt="" />
                </div>
                
             <div className='ml-2'>
             <h1 className='mt-[10px] text-[#555454]'>{displayProductName}</h1>
                <div className='flex gap-3 items-center '>
                <h1 className='font-[700] text-[25px] '>{props.price}</h1> 
                <h1 className='text-[#6e6d6d] text-[22px]  line-through' >{props.brforeDoscount}</h1> 
                <h1 className='text-[#038D63] text-[15px]  font-[500]'>{props.off} off</h1>
                </div>
                <div className='text-[#615f5f]' >{props.isfree}</div>
                {/* rating and rewview ------------ */}
                <div className='flex  justify-between items-center'>
                    <div className=' rounded-full px-3 flex items-center bg-[#038D63] text-[white] w-max'  > 
                        <h1>{props.rating}  </h1>
                        <RxStarFilled/>
                    </div>
                    <h1 className='text-[12px] text-[#393838]' > 11121 Reviews</h1>
                            <img src="https://www.meesho.com/assets/svgicons/mtrusted.svg" alt="" />
                </div>
             </div>
            </div>
        </>
    );
};

export default Product