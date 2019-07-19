import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Show extends Component {
    constructor(props) {
        super(props);
        this.state={isKelvin:true}
        this.handleClick=this.handleClick.bind(this);

    }
    handleClick(){
       
        
        if(this.state.isKelvin){
            this.setState({isKelvin:false})
            console.log('insideif');
            
        }else{
            this.setState({isKelvin:true})
            console.log('insideelse');
        }
    }
    render() {
        let tempSrc = `http://openweathermap.org/img/w/${this.props.weather.icon}.png`;
        let inKelvin=Math.round(this.props.temperature);
        let inCelsius=inKelvin-273;
        return (
            <div>
                <div id="result">
                    <div className="heading">{this.props.name}</div>
                    <img src={tempSrc} alt="" />
                    <div>{this.props.weather.main}</div>
                    <div>Temperature: {this.state.isKelvin?inKelvin:inCelsius}{this.state.isKelvin?'K':'C'}</div>
                    <button onClick={this.handleClick}>{this.state.isKelvin?'In Celsius':'In Kelvin'}</button>
                </div>
            </div>
        )

    }
}

export default Show;