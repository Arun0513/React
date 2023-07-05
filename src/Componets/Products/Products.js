import React, { useEffect, useState } from 'react'
import './Products.css'
import Axios from "../../Axios/Axios"
function Products() {
     const [datas,setData]=useState([])
     useEffect(() => {
          Axios.get('/photos').then((response)=>{
               console.log(response)
               setData(response.data)
          })
     }, [])
     
  return (
    <div className='Products'>
     {
               datas.map((obj)=>{
                   return(
                    <>
                    <div className='Item'>
                         <img className='Image' src={obj.url} alt='no'>
                         </img>
                         <h1 className='ItemName'> {obj.title}</h1>
                         <h2 className='ItemPrice'>{obj.id}</h2>
                         {/* <button className='ItemBtn'>BUY NOW</button>
                         <button className='ItemBtn1'>ADD TO CART</button> */}
                    </div>
               </>
                   )
               })
     }
        
       
                  
        
    </div>
  )
}

export default Products