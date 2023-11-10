import React from 'react';
import {useState} from 'react';


const App = () => {
  const [count, setCount] = useState("");
  const [count2, setCount2] = useState("");

  const handleSalary = (e) => {
    setCount(e.target.value);
  };

  const handleExpense = (e) => {
    setCount2(e.target.value);
  };

  return (
    <div className="App">
      <h2>Class Component</h2>
      <label>Salary:</label>
      <input  onChange={handleSalary} value={count} type="number" />
      <label>Expense:</label>
      <input  onChange={handleExpense} value={count2} type="number"  />
      <h1>Balance {count-count2}</h1>
    </div>
  );
};

export default App;


function MyComponent(){
  return (
      <>

      <h1></h1>

      <p></p>

      </>
   )
}