import React, { Component } from 'react';
import '../styles/components/app.scss'
import Show from './Show.jsx'
import Form from './Form.jsx'

class App extends Component {
    constructor(props) {
        super(props);
    
        this.state = { temperature: '', weather: '', unit: 'Celsius', isCelsius: true,location:'Kathmandu' }
     
    }
    // handleClick() {
    //     let val = document.getElementById('search');
    //     if (val.value != '') {
    //         this.setState({location:(val.value)})
    //         console.log(this.state.location);
            
    //         this.setState({ isCelsius: true })
    //         searchWeather(this.state);
            
            
                    // document.getElementById('result').style.display = 'block';
            // console.log(this.state.cityName);
            
                
    //     }
    // }
    // handleClick1() {
    //     if (this.state.unit == 'Celsius') {
    //         this.setState({ isCelsius: false })

    //         let x = this.state.temperature;
    //         this.setState({
    //             temperature: (Math.round(x
    //                 + 273.15))
    //         })
    //         this.setState({ unit: "Kelvin" })
    //     } else {
    //         this.setState({ isCelsius: true })
    //         let x = this.state.temperature;
    //         this.setState({ temperature: Math.round(x - 273.15) })
    //         this.setState({ unit: "Celsius" })
    //     }
    // } 

    render() {
        // const { temperature, unit, isCelsius, weather ,cityName,location}   = this.state;
        return (
            <div className='wrapper'>
               <Form />
            </div>
        );
    }
}


export default App;