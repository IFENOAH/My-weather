import './App.css';
import React, { useState } from 'react'
import axios from 'axios';

function Navbar() {

    const [location, setLocation] = useState('');
    const [data, setData] = useState({});

    // const handleChange = (e) => {
    //   setLocation( e.target.value )
    // }

    // const api = {
    //   key : "9aa887d6139b52879968085ce16d71b6"
    // }


    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=9aa887d6139b52879968085ce16d71b6`

  
    const handleSearch = (event ) => {

      if(event.key=== "Enter"){

        event.preventDefault();

        axios.get(url).then((response) => {
          setData(response.data)
          console.log(response.data)
        })

        setLocation('')
      }
    }


    const current = new Date();
    const date = `${current.getDate().toLocaleString()}/${current.getMonth()+1}/${current.getFullYear()}`;


    return (
  
      <div className = "app">
      
        <div className = "nav">
  
          <h2 className = "navHeader">
            My weather App
          </h2>
          <div className = "date">
            { date }
          </div>
        </div>
  
        <div className = "banner-content">

          <div className = "input">
            <input 
            type = "text"
            placeholder = "search city" 
            onChange = { e => setLocation( e.target.value ) }
            onKeyPress = { handleSearch }
            value = { location }
            />
          </div>

          <div className = "location">
            { data.name ? <h2>{data.name}, {data.sys.country}</h2> : null}
          </div>

          <div className = "temp"> 
            { data.main ? <h2>{data.main.temp.toFixed()}°c</h2> : null}
          </div>

          <div className = "description"> 
          { data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>

          <div className = "hi-lo">
          { data.main ? <h2>{Math.round(data.main.temp_min)}°c/{Math.round(data.main.temp_max)}°c </h2> : null}
          </div>
          
        </div>
          
      </div>

        
    )
}

export default Navbar
