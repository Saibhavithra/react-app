import "./App.css";
import  React,{useState} from "react";


function Checkboc1(){
   const[checkedValues, setValue] = useState([]);

    function handleChange(event){
        const {value, checked} = event.target

        if(checked){
            setValue(pre =>[...pre,value])
        }else(
            setValue(pre=>{
                return[...pre.filter(skill=>skill === value)]
            })
        )
    }
    console.log(checkedValues)//e=>setHobbies(e.target.value)

    return(
        <div className ="App">
        
        {/* <h1>{Hobbies}</h1> */}
        
        {/* <label>Hobbies</label> */}
        <div className='inputs'>
        <input type="checkbox" name="hobbies" value="Sports" onChange={handleChange}/>Sports
        <input type="checkbox" name="hobbies" value="Travel" onChange={handleChange}/>Travel
        <input type="checkbox" name="hobbies" value="Music" onChange={handleChange}/>Music
        <input type="checkbox" name="hobbies" value="Reading" onChange={handleChange}/>Reading
         </div>
         </div>
);
    }
    export default Checkboc1;
