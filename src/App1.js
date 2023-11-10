import React, { Component } from "react";
 import "./App.css";

 const Person  = ({person, setToSelect}) => (
 <div>
   <input type="checkbox" name="person" checked={person.checked} onChange= 
         {setToSelect.bind(this, person)} />
 {person.name}
 </div>
 );

 class PeopleList extends Component {
   render() {
     return(
         <div>
           {this.props.people.map((person, i) => {
             return <Person key={i} person={person} 
                      setToSelect={this.props.setToSelect} />;
           })}
         <div> All </div>
         <div onClick={this.props.selectedItems}> Selected </div>
         <div onClick={this.props.selectedItemsUnchecked}> Unselected </div>
      </div>
    );
  }

 } 