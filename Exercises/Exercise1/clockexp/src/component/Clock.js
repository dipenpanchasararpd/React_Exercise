import React, { Component } from 'react'
import './Clock.css';

class Clock extends Component {
    currentTime() {
        this.setState({ time: new Date() });
    }
    componentDidMount() {
        this.interval = setInterval(() => this.currentTime(), 1000);
    }
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }
    render() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let day = date.getDay();
        let month = date.getMonth();
        let year = date.getFullYear();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        let Days = ['Monday', 'Tuesday', 'Wenesday', 'Thusday', 'Friday', 'Saturday', 'Sunday'];
        let Months = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'Septmber', 'October', 'November', 'December'];

        let showDay;
        let showMonth;

        for (let i = 0; i < Days.length; i++) {
            if (day === i) {
                showDay = Days[i];
            }
        }

        for (let i = 0; i < Months.length; i++) {
            if (month === i) {
                showMonth = Months[i];
            }
        }

        return (
            <div style={{ marginTop: 250 }}>

                <div className='day'> <h5 style={{ marginBottom: 0, marginTop: 100, marginLeft: 700 }}>{showDay}</h5></div>
                <div className='hrmt'>
                    <h1 id='time' style={{ marginTop: 0, marginBottom: 0, marginLeft: 20 }}>{hours}:{minutes} </h1>
                    <div className='day'>
                        <h6 style={{ marginTop: 0, marginBottom: 40 }}>{ampm}</h6>
                        <h6 style={{ marginBottom: 0, marginTop: 0 }}>{seconds}</h6>
                    </div>

                </div>
                <div className='day'> <h5 style={{ marginTop: 10, marginBottom: 500 , marginLeft: 690 }}>{showMonth} {day} {year}</h5></div>



            </div>
        )
    }

}


export default Clock