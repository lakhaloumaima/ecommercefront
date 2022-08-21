import React from 'react';
import Counter  from './counter';

const Counters = () => {
    return (
        <div style={{display:'flex',justifyContent:"center"}} >
            <Counter index={1} initlavalue={0} />
            <Counter index={2} initlavalue={10}/>
        </div>
    )
}

 
export default Counters;