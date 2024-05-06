import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { GiTireIronCross } from "react-icons/gi";
import { useEffect,useState } from 'react';


export default function AnchorTemporaryDrawer(props) {
    
    
    const [quantity, setquantity] = useState();
    const [price, setprice] = useState();
    const [name, setname] = useState();
    useEffect(() => {
    setquantity(props.data.quantity)
    }, [props.data.quantity])
    useEffect(() => {
        setprice(Number(props.data.price.split('₹')[1]) * props.data.quantity)
        setname(props.data.name)
    }, [props.data.price])

    function substact(){
        if(quantity>1){
            setquantity(quantity-1)
            setprice(Number(props.data.price.split('₹')[1]) * (quantity-1))
        }
    }
    function add(){
        if(quantity>=1){
            setquantity(quantity+1)
            setprice(Number(props.data.price.split('₹')[1]) * (quantity+1))
        }
    }
    function saveQuantity(){
        fetch('https://messobackend.vercel.app/increasequentity',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                name:name,
                quantity:quantity,
                email_id:localStorage.getItem('messo_id')
            })
        }).then((resp)=>resp.json()).then((data)=>{
            console.log(data)
            location.reload()
        })
    }
    
  const [state, setState] = React.useState({
    
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 450 }}
      role="presentation"
      className="p-3"
    >
      <h1 className=' font-[600] text-xl mt-5'>EDIT ITEM</h1>
      <GiTireIronCross onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)} className=' cursor-pointer absolute top-10 right-10 text-[red] text-2xl '/>
     <br />
      <hr />
      <br />
      <div className='flex gap-3' >
      <img  className=' border w-[50px]' src={props.data.img} alt="" />
      <div>
      {props.data.name.length>20?<h1 className='text-xl font-[500]'>{props.data.name.slice(0, 30) + "..."}</h1>:<h1  className='text-xl font-[500]'>{props.data.name}</h1>}
      <h1>{props.data.price}</h1>
      </div>
      </div>
      <hr className='mt-4 mb-4' />
      <div className='flex gap-2 justify-center'>
      <h1 className='text-xl'>Qty</h1>
      <div className='flex gap-2 border text-xl'>
        <button onClick={substact} className='w-7 bg-[#ecd9d9] font-[700]'>-</button>
        <h1>{quantity}</h1><button onClick={add} className='w-7 font-[700] bg-[#ecc1c1]'>+</button>
      </div>
      </div>
      <hr className='mt-4 mb-4' />
      <div className='text-xl flex justify-between'>
        <h1>Total Price</h1>
        
         <h1 className=' font-[700]'>₹{price}</h1> 

      </div>
      <hr className='mt-4 mb-4'  />
      <button onClick={toggleDrawer(anchor, false)} onMouseDown={saveQuantity} className='loginbtn'>Continue</button>
    </Box>
    
  );

  return (
    <div>
      {[ 'EDIT'].map((anchor) => (
        <React.Fragment key={'right'}>
          <button className='text-[purple]' onClick={toggleDrawer('right', true)}>{'right'}</button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
