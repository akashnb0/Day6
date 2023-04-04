import React, { Component } from 'react'
class Practise extends Component {
    constructor()
    {
        super();
        this.state = {
            count:0,
        };
    }
    changeCount = () =>
    {
        this.setState({count:this.state.count+1});
    };
    changeCount1 = () =>
    {
        this.setState({count:this.state.count-1});
    };
  render() {
    console.log("normal component");
    return (
      <>
            <h1>{this.state.count}</h1>
            <button onClick={this.changeCount}>Increase Count</button>
            <button onClick={this.changeCount1}>Decrease Count</button>
      </>
    )
  }
}
export default Practise;
