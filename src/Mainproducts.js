import React, {useState} from "react"
import Smartphones from "./Smartphones "
import HomeAccessories from "./HomeAccessories "
import Clothes from './Clothes'
import Foodstuff from './Foodstuff  '

const Mainproducts=({count,setCount})=>{

  const [isShown,setIsShown]=useState(true)
  
  const handleCartAddition=()=>{
     setCount(count+1)
  }
  
  return(
    <div className="container">
      {count > 0 &&
           <small id="count">
               {count}
           </small>
      }
       <section>
         <p>Best shopping experience </p>
         <p>Discounts up to 50% off</p>
       </section>
       <Clothes 
            isShown={isShown} 
            setIsShown={setIsShown}
            handleCartAddition={handleCartAddition}/>
       <Smartphones 
            isShown={isShown} 
            setIsShown={setIsShown}
            handleCartAddition={handleCartAddition}/>

       <Foodstuff 
            isShown={isShown} 
            setIsShown={setIsShown}
            handleCartAddition={handleCartAddition} />

       <HomeAccessories 
            isShown={isShown} 
            setIsShown={setIsShown}
            handleCartAddition={handleCartAddition} />
    </div>   
  )
}
export default Mainproducts
