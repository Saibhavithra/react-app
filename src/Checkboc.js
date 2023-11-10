import "./App.css";
import  React,{useState} from "react";


function Checkboc(){
    const[Hobbies, setHobbies] = useState();

    return(
        <>
        <h1>{Hobbies}</h1>
        <label>Hobbies</label>
        <input type="radio" name="hobbies" value="Sports" onChange={e=>setHobbies(e.target.value)}/>Sports
        <input type="radio" name="hobbies" value="Travel" onChange={e=>setHobbies(e.target.value)}/>Travel
        <input type="radio" name="hobbies" value="Music" onChange={e=>setHobbies(e.target.value)}/>Music
        <input type="radio" name="hobbies" value="Reading" onChange={e=>setHobbies(e.target.value)}/>Reading
         </>
);
    }
    export default Checkboc;


 