import React from 'react';
import {useState,useEffect} from 'react';
function Counter(props) {
    const[count, setCount] = useState(0)
    useEffect(()=>{ 
        console.log("UseEffect is called..")
        setTimeout(() => {
            setCount(count=>count+1)
    },1000); 
       
       
},)
    return (
        <div>

            <h1>I have rendered {count} times</h1>
        </div>
    );
}

export default Counter;