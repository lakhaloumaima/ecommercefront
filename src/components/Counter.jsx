import React, { useEffect, useState } from 'react';
import '../assets/css/counter.css' ;
function Counter({index , initlavalue}) {
   //useState(0) => initialiser a 0 , dynamique
   //usf
   //counter = variable
   const [counter, setcounter] = useState(initlavalue);
   const increment=() =>{
     setcounter(counter+1);
   }
   const decrement = () =>{
    if (counter > 0)
     setcounter(counter-1);
   };
   //bsh tahky maa serveur bel useEffect
   useEffect(
     ()=> {} ,[]
     );
    return (
        <div className="counter">
          <h3>
            Counter{index}
          </h3>
        <span style={{fontSize:"100px"}}> {counter}</span>
      <div>
        <button onClick={()=>increment()} >+</button>
        <button onClick={()=>decrement()} >-</button>
      </div>
        </div>
    )
}
export default Counter;