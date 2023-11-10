import {useState} from "react";
function MyComponent(props){
    const[color, setColor] = useState('Red')
    return(
        <>
        <h1>This is a Custom Componeent.Hello {props.myName}</h1>
        <h2>My Favorite color is:{color}</h2>
        <p>A NEW para</p>
        <button onClick={()=>setColor('Blue')}>Change Color</button>
        </>
    )
}

export default MyComponent;