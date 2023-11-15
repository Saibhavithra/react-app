import React from 'react';
import {useState} from 'react';
import DynamicRender from './DynamicRender'

const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const[user,setUser] = useState('userC');
  

const match=(e)=>{  
      e.preventDefault();
    if ((userName == 'sai') && (password == 333)){
        alert('login successful');
        setUser('usera')
    }
    else{
        alert('login failed')
         setUser('userb')
    }
     
    }   
  return (
    <div className="App">
      <h1>Login Validation with Dynamic Rendering</h1>
      <h2>My Username is sai and My Password is 333</h2>
      <form onSubmit={match}>
      <label>UserName:</label>
      <input  type="text" onChange={e=> setuserName(e.target.value)}/>
      <label>Password:</label>
      <input   type="text" onChange={e=>setpassword(e.target.value)} />
      <h1> {userName}{password}</h1>
      <button>Login </button>

      </form>
      <DynamicRender user={user} />
      <h1></h1>
    </div>
  );
  };

export default Login;








