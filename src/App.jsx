import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom'
import Login from './components/Login'
import Header from './components/header'
import Home from './components/home'
import ProductDetail from './components/productDetail'
import { createContext } from 'react'
import Cart from './components/cart'

export const UserContext = createContext()


function App() {
  const [count, setCount] = useState("one")
  const [mydata, setmydata] = useState();
  const [FilterData, setFilterData] = useState();
  const [Gender, setGender] = useState();
  const [FilteredPrice, setFilteredPrice] = useState();
  const [showlogin, setshowlogin] = useState(true); 
  const [numberOfdata, setnumberOfdata] = useState();
  

  useEffect(() => {
   if(localStorage.getItem('nIgOlSi')){
  
     setshowlogin(false)
   }







  }, [])
  const data=(item)=>{
   setmydata(item)
  }
  const  filter=(item)=>{
    setFilterData(item)
    
  }
  const FilterGender=(item)=>{
    setGender(item)
    
  }
  const FilterPriceList=(item)=>{
    setFilteredPrice(item)
  }
  const isLogin=(item)=>{
    setshowlogin(item)
  }
  const alldatavalue=(item)=>{
    localStorage.setItem('totalquantity', item)
    
  }
  
  return (
    <>
    <UserContext.Provider value={{count:count,data:data,mydata:mydata,
      filter:filter,FilterData:FilterData,FilterGender:FilterGender,Gender:Gender,
      FilterPriceList:FilterPriceList,FilteredPrice:FilteredPrice,
       isLogin:isLogin,isshowlogin:showlogin,alldatavalue:alldatavalue
      }}>
    <Router>
   
   
   <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/Login" element={<Login/>} />
     <Route path="/ProductDetail" element={<ProductDetail/>} />
     <Route path="/cart" element={<Cart/>} />

   </Routes>
   </Router>
   </UserContext.Provider>
    </>
  )
}

export default App
