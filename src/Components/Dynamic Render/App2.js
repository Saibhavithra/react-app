import React from 'react';
import { BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
import UserA from './UserA';
import UserB from './UserB';
import UserC from './UserC';
import Login from './Login';


const App2 =() =>{
    return(
        <Router>
            <Routes>
            <Route path='/react-app' element={<Login/>}/> 
            <Route path='/compA' element={<UserA/>}/> 
            <Route path='/compB' element={<UserB/>}/>
            <Route path='/compC' element={<UserC/>}/>
            </Routes>
            </Router>
    )
}

export default App2;