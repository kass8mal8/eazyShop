import React, {useState} from "react"
import Smartphones from "./Smartphones "
import HomeAccessories from "./HomeAccessories "
import Clothes from './Clothes'
import Foodstuff from './Foodstuff  '

const Mainproducts=({count,setCount})=>{

  const [isShown,setIsShown]=useState(true)
  
  
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
            count={count}
            setCount={setCount} />
       <Smartphones 
            isShown={isShown} 
            setIsShown={setIsShown}
            count={count} 
            setCount={setCount} />

       <Foodstuff 
            isShown={isShown} 
            setIsShown={setIsShown}
            count={count} 
            setCount={setCount} />

       <HomeAccessories 
            isShown={isShown} 
            setIsShown={setIsShown}
            count={count} 
            setCount={setCount} />
    </div>   
  )
}
export default Mainproducts
