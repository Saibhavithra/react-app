import logo from './logo.svg';
import './App.css';
import MyComponent from './Components/MyComponent';
import MyClassComponent from './MyClassComponenet';
//import Checkboc4 from './Components/Checkboc4';
import Checkboc6 from './Checkboc6';

import { useState } from 'react';
//import dynamicrender from './Components/Dynamic Render/dynamicrender';
//import DynamicRender from './Components/Dynamic Render/DynamicRender';
//import Login from './Components/Dynamic Render/Login';
import App2 from './Components/Dynamic Render/App2';
function App() 
{

 //const[user,setUser] = useState('usera')
 
 
  return (
    < div className="App">
      
      {/* <DynamicRender user={user}/> */}
     {/* <button onClick={()=>setUser('usera')}>Switch to User A</button> */}
      {/* <button onClick={()=>setUser('userb')}>Switch to User B</button> */}
        {/* <Login/>    */}
         <App2/>
          {/* <MyComponent/>  */}
            {/* <Checkboc6/>  */}
         {/* <MyClassComponent/>  */}
      
    </div>
  );
  
}

export default App;
