import React ,{useMemo}from 'react'
import TemperatureChart from './TemperatureChart'
import { UseSelector, useSelector } from 'react-redux'
import { FormatTime } from '../Date'

const Graph = () => {
    const selectedDay = useSelector((state)=>state.weather.selectedDay)
    const apiData = useSelector((state)=>state.weather.apiData)
    const graphData = useMemo(() => {       

        return apiData.slice(selectedDay * 8, (selectedDay *8 ) + 8);
                 
         }, [selectedDay, apiData]);

    const temperature = graphData.map((a)=>Math.floor(a.main.temp))
    const humidity = graphData.map((a)=>a.main.humidity)
    const wind = graphData.map((a)=>a.wind.speed)

    const time = graphData.map((a)=>FormatTime(a.dt_txt,"graph")) 
  return (
    <div className='chart-section bg-white'>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Temperature</button>
            </li>
            <li className="nav-item" role="presentation">
                    <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Humidity</button>
            </li>
            <li className="nav-item" role="presentation">
                  <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Wind</button>
             </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><TemperatureChart value={temperature} time={time} component = "Temperature"/></div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><TemperatureChart value={humidity} time={time} component = "Humidity (%)"/></div>
            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><TemperatureChart value={wind} time={time} component = "Wind"/></div>
        </div>
    </div>
  )
}

export default Graph