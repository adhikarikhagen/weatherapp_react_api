import React, { Component } from 'react';
import Show  from './Show.jsx'

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
                currentLocation: 'Kathmandu',
                temperature: '',
                weather: '', 
                label:null,
                firstIteration:false
                }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount(){
        this.newMethod(this.state.currentLocation);
    }
    handleSubmit(event) {
        event.preventDefault();
        let variable = event.target.elements.city.value;
       if(variable!=''){
        this.newMethod(variable);
        if(this.state.label==null){
            document.getElementById('labelid').innerHTML='';
            document.getElementById('labelid').style.color='blue';
        }
       }
    }
    newMethod(searchTerm) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=cb576d7f9f13da319f418114a401f91a&units=metrics`)
            .then(result => {
                return result.json();
            })
            .then(res => {
                if (res.cod == 404) {
                  this.setState({label:400})
                }
                else if (res) {
                    this.setState({currentLocation:searchTerm,label:null,firstIteration:true})
                    this.setState({ temperature: res.main.temp,weather:res.weather[0]});
                }
            });
    }
    render() {
        let show =true;
        if(this.state.firstIteration){
            document.getElementById('labelid').innerHTML='';
        }
        if(this.state.label==400){
            document.getElementById('labelid').innerHTML='!Please Enter Valid Name';
            document.getElementById('labelid').style.color='red';
            show = false;
           
           }
        return (
          <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name='city'/>
                    <input type="submit" value='Enter' />
                   <div>
                <label id='labelid'></label>
                   </div>
            </form>
            
            {show &&
                <Show name={this.state.currentLocation} temperature={this.state.temperature} weather={this.state.weather}  />
            }
            
          </div>
        );
    }
}


export default Form;