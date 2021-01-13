import React from 'react'
import './index.css'

 const Weatherindex =({data})=>{
     const description=data?data.weather[0].description:'';
        const date = new Date();
        const months =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        let icon;
        const displayIcon=(discription)=>{
          if(discription==='haze' || discription==='smoke' || discription==='fog' || discription==='mist'){
            icon='fa-sun-haze';
        }
        else if(discription==='overcast clouds'){
            icon='fa-clouds-sun';
        }
        else if(discription==='clear sky'){
            icon='fa-sun'
        }
        else if(discription==='rain' || discription==='shower rain'){
            icon='fa-cloud-showers-heavy';
        }
        else if(discription==='thunderstrom'){
            icon='fa-thunderstorm'
        }
        else if(discription==='snow'){
            icon='fa-snowflakes';
        }
        }
     
        displayIcon(description);

        return (
            <div className="container mt-4">
                <div className="box">
                  <div className="topBox">
                     <div className="icon">
                     <i className={`fal ${icon?icon:'fa-clouds-sun'} fa-10x`}></i>
                     </div>
                     <div className="description">
                         <div className="temp">
                           <h1>{data?Math.ceil(data.main.temp-273):''}&deg;c</h1>
                         </div>
                         <div className="des">
                           <h2>{data?data.weather[0].description:''}</h2>
                            <p>{data?data.name:''}, {data?data.sys.country:''}</p>
                         </div>
                         <div className="date">
                            <div>{months[date.getMonth()]}</div>
                            <div>{date.getDate()}</div>
                         </div>
                     </div>
                  </div>
                  <div className="bottomBox">
                  <i className="fas fa-wind"></i> {data?data.wind.speed:''}MPH
                  <i className="fas fa-sun"></i> {data?data.main.humidity:''}
                  <i className="fas fa-tint"></i> {data?data.main.sea_level:''}
                  </div>
                </div>
            </div>
        )
      }
  

    export default Weatherindex;