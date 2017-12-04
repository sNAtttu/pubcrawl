import React, { Component } from 'react';
import { Timer, Days, Hours, Minutes, Seconds } from '../components/Timer';

export default class CountdownTimer extends Component{
  constructor(props){
    super(props);
    this.state={days: '', hours: '', minutes: '', seconds: ''}
  }
  componentDidMount = () => {
    this.tick();
    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }
  tick = () => {
    const countDownDate = new Date("Dec 5, 2017 18:00:00").getTime();
    const now = new Date().getTime();  
    const distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.setState({
      days,
      hours,
      minutes,
      seconds,
    });
    
  }
  render(){
    return(
    <Timer>
      <Days>{this.state.days} PÄIVÄÄ</Days>
      <Hours>{this.state.hours} H</Hours>
      <Minutes>{this.state.minutes} MIN</Minutes>
      <Seconds>{this.state.seconds} SEC</Seconds>
    </Timer>
    )
  }
}