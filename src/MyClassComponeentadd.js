import{Component} from "react";
class MyClassComponent extends Component{

    constructor() {
        super();
    
        this.state ={
          num1 : 0,
          num2 : 0,
        }
      }
    
      updateNum1(event) {
        this.setState({
          num1: event.target.value
        });
      }
    
      updateNum2(event){
        this.setState({
          num2: event.target.value
        });
      }
    
      render() {
        const { num1, num2 } = this.state;
    
        const total = parseInt(num1) - parseInt(num2);
    
        return (
          <div>
            <input
              type='number'
              value={num1}
              onChange={this.updateNum1.bind(this)}
            />
            <input
              type='number'
              value={num2}
              onChange={this.updateNum2.bind(this)}
            />
    
            <h1>{total}</h1>
          </div>
        );
      
    }   }
export default MyClassComponent;

 
    