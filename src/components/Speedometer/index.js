// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state={count:0}
  onIncrement=()=>{
    this.setState((prevState)=>{
      if (prevState.count<200){
        return ({count:prevState.count+10})
      }
    })
  }
  onDecrement=()=>{
    this.setState((prevState)=>{
      if (prevState.count>0){
        return ({count:prevState.count-10})
      }
    })
  }
  render() {
    const {count}=this.state
    return (
      <div className="mainContainer">
        <h1 className="head1">Speedometer</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img1"
          alt="speedometer"
        />
        <h1 className="head1">
          Speed is <span>{count}mph</span>
        </h1>
        <p className="para1">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btnContainer">
          <button className="btn" onClick={this.onIncrement}>Accelerate</button>
          <button className="btn2" onClick={this.onDecrement}>Apply Brakes</button>
        </div>
      </div>
    )
  }
}
export default Speedometer
