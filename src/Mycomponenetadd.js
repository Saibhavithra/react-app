
import React,{useState} from 'react';

 function Mycomponenetadd() {
    const [num1, setNumber] = useState(0);
    const [num2, setNumber2] = useState(0);
    const [tot, setTotal] = useState(num1-num2);

    return(
        <div className="App">
            <h1>Balance</h1>
            <div className="input-numbers">
                <input type="number" placeholder="0" onChange={e=> setNumber(+e.target.value)}/>
                <input type="number" placeholder="0" onchange={e=> setNumber2(+e.target.value)}/>
                <h2>{tot}</h2>
                </div>
                  
            </div>


    );
 }
 export default MyComponent;

