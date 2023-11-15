import React from 'react';
import userA from './userA';
import userB from './userB';
import userC from  './userC';

const components ={
    usera :userA,
    userb :userB,
    userC :userC,

}
function DynamicRender(props) {
     const SelectUser = components[props.user]
 
    return (
        
           <SelectUser/> 
        
    );
};

export default DynamicRender;