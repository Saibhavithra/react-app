import{Component} from "react";
class MyClassComponent extends Component{
  constructor(){
        super()
    this.state={
        
            id:1,
            name:'john'
        }
        this.update=this.update.bind(this)
    }
    update(){
        alert('Function called')
        this.setState({id:100})
        this.setState({id:this.state.id+1})
    }
    
    render(){
       
            return(
                <>
            
    
            <h1>Name:{this.state.name}</h1>
            <h2>This is my class componenet. Mycity:(this.props.mycity)</h2>
            <h3>My Id is:{this.state.id}</h3>
            <button onClick ={this.update}>Click to update </button>
            </> 
            
        )
    }
    }
    
