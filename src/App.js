import './App.css';
import React, { useState } from 'react'
import image1 from './Images/searchh.svg'
import axios from 'axios'

function Navbar() {

    const [location, setLocation] = useState('');
    const [data, setData] = useState({});
    const [days, setDays] = useState({})
    
    const date = new Date().toLocaleDateString();
    
    // `api.openweathermap.org/data/2.5/forecast/daily?q=${location}&cnt=5&appid=9aa887d6139b52879968085ce16d71b6`

    const url_one = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=9aa887d6139b52879968085ce16d71b6`
    const url_two = `https://api.openweathermap.org/data/2.5/forecast/?q=${location}&cnt=5&units=metric&appid=9aa887d6139b52879968085ce16d71b6`

  
    const handleSearch = (event ) => {

      if(event.key=== "Enter"){

        event.preventDefault();

        axios.get(url_one).then((response) => {
          setData(response.data)
          console.log(response.data)
        })

        axios.get(url_two).then((response) => {
          setDays(response.data)
          console.log(response.data)
        })
        setLocation('')
      }
    }

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

            <img src = {image1} alt = "search icon" width = {18} height = {18} />

            <input 
            type = "text"
            placeholder = "search city" 
            onChange = { e => setLocation( e.target.value ) }
            onKeyPress = { handleSearch }
            value = { location }
            />
          </div>

          {
            data.main && (

              <div className = "wrapper">

                <div className = "info">
                  <h2 className = "location"> {data.name}, {data.sys.country} </h2>

                  <div className = "data-box">
                    <h2 className = "temp"> {data.main.temp.toFixed()}<sup>°c</sup></h2>
                    <h6 className = "hi-lo"> {Math.round(data.main.temp_min)}<sup>°c</sup>/{Math.round(data.main.temp_max)}<sup>°c</sup> </h6>
                  </div>
                </div>

                <div className = "description">
                  <img className = "icon" src = {`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
                  <h2 className = ""> {data.weather[0].main} </h2>
                </div>

              </div>
            )
          }

          { days.list && (

            <div className = "days-container">

              <div className = "days">
                <h1 className = "date"> {days.list[0].dt_txt} </h1>

                <div className = "temp-holder">
                  <h2 className = "day-temp">{days.list[0].main.temp.toFixed()}<sup>°c</sup></h2>
                  <h6 className = "day-hi-lo"> {Math.round(days.list[0].main.temp_min)}<sup>°c</sup>/{Math.round(days.list[0].main.temp_max)}<sup>°c</sup> </h6>
                </div>
                {/* <h2> {days.list[0].weather[0].main} </h2> */}
                <img src = {`https://openweathermap.org/img/wn/${days.list[0].weather[0].icon}@2x.png`} />
              </div>

              <div className = "days">
                <h1 className = "date"> {days.list[1].dt_txt} </h1>
                <div className = "temp-holder">
                  <h2 className = "day-temp">{days.list[1].main.temp.toFixed()}<sup>°c</sup></h2>
                  <h6 className = "day-hi-lo"> {Math.round(days.list[1].main.temp_min)}<sup>°c</sup>/{Math.round(days.list[1].main.temp_max)}<sup>°c</sup> </h6>
                </div>
                {/* <h2> {days.list[0].weather[0].main} </h2> */}
                <img src = {`https://openweathermap.org/img/wn/${days.list[1].weather[0].icon}@2x.png`} />
              </div>

              <div className = "days">
                <h1 className = "date"> {days.list[2].dt_txt} </h1>
                <div className = "temp-holder">
                  <h2 className = "day-temp">{days.list[2].main.temp.toFixed()}<sup>°c</sup></h2>
                  <h6 className = "day-hi-lo"> {Math.round(days.list[2].main.temp_min)}<sup>°c</sup>/{Math.round(days.list[2].main.temp_max)}<sup>°c</sup> </h6>
                </div>
                {/* <h2> {days.list[0].weather[0].main} </h2> */}
                <img src = {`https://openweathermap.org/img/wn/${days.list[2].weather[0].icon}@2x.png`} />
              </div>

              <div className = "days">
                <h1 className = "date"> {days.list[3].dt_txt} </h1>
                <div className = "temp-holder">
                  <h2 className = "day-temp">{days.list[3].main.temp.toFixed()}<sup>°c</sup></h2>
                  <h6 className = "day-hi-lo"> {Math.round(days.list[3].main.temp_min)}<sup>°c</sup>/{Math.round(days.list[3].main.temp_max)}<sup>°c</sup> </h6>
                </div>
                {/* <h2> {days.list[0].weather[0].main} </h2> */}
                <img src = {`https://openweathermap.org/img/wn/${days.list[3].weather[0].icon}@2x.png`} />
              </div>

              <div className = "days">
                <h1 className = "date"> {days.list[4].dt_txt} </h1>
                <div className = "temp-holder">
                  <h2 className = "day-temp">{days.list[4].main.temp.toFixed()}<sup>°c</sup></h2>
                  <h6 className = "day-hi-lo"> {Math.round(days.list[4].main.temp_min)}<sup>°c</sup>/{Math.round(days.list[4].main.temp_max)}<sup>°c</sup> </h6>
                </div>
                {/* <h2> {days.list[0].weather[0].main} </h2> */}
                <img src = {`https://openweathermap.org/img/wn/${days.list[4].weather[0].icon}@2x.png`} />
              </div>

              
            </div>

          )}

          
        </div>
          
      </div>

        
    )
}

export default Navbar
