import React, {Component} from 'react';

export default class Timer extends Component{
  constructor(props)
  {
      super(props)
      this.state=
      {
        Time : new Date().toTimeString()
      };
  };

  componentDidMount()
  {
    this.functionhandle =setInterval(()=>this.getTime(),1000)
  }
  getTime()
  {
    this.setState(
      {Time: new Date().toTimeString()}
      );
  }

  render()
{
   return (
    <div>
        <div>{this.state.Time}</div>
    </div>
  )
  
}
}