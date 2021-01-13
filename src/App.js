import React, { Component } from 'react';
import Search from './Component/Search';
import Weather from './Component/Weather';
import Weatherindex from './Component/Weather/index'
class App extends Component {
     
     state={
         weatherData:''
     }

    onSumbmitTerm= async (city)=>{
        if(city){
    const res= await Weather.get('/weather',{
         params:{
            q:city
         }
     });
     const data = res.data;
     this.setState({weatherData:data});
    }
    } 
    render(){
    return (
        <div>
            <Search onSumbmitTerm={this.onSumbmitTerm}/>
                <Weatherindex data={this.state.weatherData}/>
        </div>
    );
}
}

export default App;
