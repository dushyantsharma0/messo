import React from 'react';

const Header = (props) => {
  console.log(props.data.heading);
  return (
    <div className=''>
      <div className=' p-4 gap-10 flex mx-4 mt-[-30px] shownavbars w-[95%] h-[max-content] bg-white border border-[#ddd]'>
        {props.data.heading.map((resp, key) => {
          return (
            <div className=''  key={key}>
                
              {resp.map((result, newkey) => {
                return (
                  <div  key={newkey}>
<p className={newkey === 0 ? 'text-[red]' : null} key={newkey}>{result}</p>                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
