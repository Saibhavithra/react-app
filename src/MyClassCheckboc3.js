import React, { Component } from "react";
//import ReactDOM from "react-dom";
//import Select from "react-select";
//import "./styles.css";
const options = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
  { label: "Option 5", value: 5 },
  { label: "Option 6", value: 6 },
  { label: "Option 7", value: 7 }
];
class MyClassCheckboc3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      values: []
    };
  }
  onChangeCheckbox = e => {
    const isChecked = !this.state.checked;
    this.setState({
      checked: isChecked,
      values: isChecked ? options : this.state.values
    });
  };
  onChange = opt => {
    const allOptionsSelected = opt.length === options.length;
    this.setState({
      checked: allOptionsSelected ? true : false,
      values: opt
    });
  };
  render() {
    return (
      <div className="App">
        <input
        isMulti
          onChange={this.onChange}
          options={options}
          value={this.state.values}
        />
        <p>
          <input
            onChange={this.onChangeCheckbox}
            type="checkbox"
            id="selectAll"
            value="selectAll"
            checked={this.state.checked}
          />
          <label for="selectAll">Select all</label>
        </p>
      </div>
    );
  }
}
//const rootElement = document.getElementById("root");
//ReactDOM.render(<App />, rootElement);
export default MyClassCheckboc3;