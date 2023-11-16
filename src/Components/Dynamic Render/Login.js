import React from 'react';
import {useState} from 'react';
//import DynamicRender from './DynamicRender';
import {styless} from '../style';
import styled from 'styled-components';
import styles from  './login.module.css';
//import Home from'./Home';
//import { Link } from 'react-router-dom';
import { Navigate, createBrowserRouter, useNavigate } from 'react-router-dom';


const StyledButton = styled.button`
background-color:BLUE;
color:White;
font-size:14px
`;
const StyledHeader = styled.header`
background-color:dodgerblue;
color:White;
font-size:34px


`;



const Login = () => {
  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
 // const[user,setUser] = useState(false);
  const [showPwd, setShowPwd] = useState("");
  
  let navigate= useNavigate();
const match=(e)=>{  
      e.preventDefault();
    if ((userName === 'sai') && (password === '333')){
        alert('login successful');
        //setUser('usera')
      //  setUser(true);

        //const router = createBrowserRouter([
        // { path: "/",
         // element: <compA/>,   }     ])
    
        navigate("/compA")

      // return<Navigate to = "/compA"></Navigate>;
      //<redirect to={{
      //  pathname: '/compA'}}/> 
    }
    else{
        alert('login failed')
         //setUser('userb')
         //setUser(false);
        // let navigate= useNavigate();
        navigate("/compB");
         //return< Navigate to = "/compB"></Navigate>;
    }
     
    }   
  return (
    <div content style={styless.TodoComponent}>
      <StyledHeader> Login Validation</StyledHeader><br></br><br></br>
      
      <form onSubmit={match}>
      < div > 
     
      <label style={styless.Header}>USERNAME:</label>
      <input  type="text" onChange={e=> setuserName(e.target.value)}/><br></br><br></br>
      
     
      <label style={styless.Header}>PASSWORD:</label>
      
      <input   type={showPwd ? 'text' : 'password'} onChange={e=>setpassword(e.target.value)} />
      <StyledButton type="button" onClick={() => setShowPwd(!showPwd)}>{showPwd ? 'Hide' : 'Show'} </StyledButton><br></br>
      
      {/* <h1> {userName}{password}</h1> */}
      <button className='btn btn-primary btn-lg'>Login </button>
      </div> 
      </form>
    
      <h6 className={styles.bigblue}>My Username is sai and My Password is 333</h6>
      {/* <DynamicRender user={user} /> */}
      {/* <Home user={user}/>  */}
      
     
   </div> 
   
  );
  };

export default Login;








