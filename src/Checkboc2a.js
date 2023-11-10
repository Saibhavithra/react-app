import { useState } from "react";

const Checkboc2 = () =>{
    const [data, setData] = useState(
        
        
            {                  
              Hobbies:"Sports",      
              Hobbies: "Travel",
              Hobbies: "Music",
              Hobbies: "Reading",    
              
             
            },
           
        
    )

	const [selectedItems, setSelectedItems] = useState([])
	

	function checkboxHandler(e){
		let isSelected = e.target.checked;
		let value = (e.target.value);

		if( isSelected ){
			setSelectedItems( [...selectedItems, value ] )
		}else{
			setSelectedItems((prevData)=>{
				return prevData.filter((Hobbies)=>{
					return Hobbies !==value
				})
			})
		}
	}

   return(
        <>
         {data.map((item,index)=><div className="card" key={index}>
         <label>
		 <input type="checkbox" checked={ selectedItems.includes( item.Hobbies) } value={item.Hobbies} onChange={checkboxHandler}/>
         </label>
         <h2>{item.Hobbies}</h2>  
                    
              
         </div>)}
         <h3>Hobbies: {selectedItems.toString()} </h3>
 
                  
        </>
        
    )
}

export default Checkboc2;