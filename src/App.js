import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      time: new Date(),
      displayString: ''
    }
  }
  componentDidMount(){
  }
  currentTime(){
    this.setState(
      {time : new Date()}
    )
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  componentWillMount(){
    console.log("hello")
    this.interval = setInterval(()=>{
      if((this.state.time.getSeconds()%5 === 0) && (this.state.time.getSeconds()%3 === 0)){
        this.setState({
          displayString: 'FizzBuzz'
        })
      }else if(this.state.time.getSeconds()%5 === 0){
        this.setState({
          displayString: 'Buzz'
        })
      }else if(this.state.time.getSeconds()%3 === 0){
        this.setState({
          displayString: 'Fizz'
        })
      }else{
        this.setState({
          displayString: ''
        })
      }
      return this.currentTime(),1000})
  }
  render(){

    return (
      <div class ="time">
        <h1> {this.state.time.toLocaleTimeString()} </h1>
        <h1>{this.state.time.getSeconds()}</h1>
        <p> Fizz, Buzz or FizzBuzz?? : <strong>{this.state.displayString}</strong> </p>
      </div>
    )
  }
}

export default App;
