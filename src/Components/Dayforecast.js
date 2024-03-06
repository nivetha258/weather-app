import React from 'react'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {DateComponent} from './Date'
import { setSelectedDay } from '../Store/Reducers'


const Dayforecast = () => {
    const count = useSelector((state)=>state.weather.apiData.length / 8 )
    const selectedDay = useSelector((state)=>state.weather.selectedDay)
    const dispatch = useDispatch()
    const icons = [
        'bi bi-cloud-rain-heavy-fill',
        'bi bi-cloud-sun-fill',
        'bi bi-cloud-snow-fill',
        'bi bi-clouds-fill',
        'bi bi-cloud-rain-fill'
      ];

const renderDayComponents = () => {
const dayComponents = [];
for (let i = 0; i < count; i++) {
    dayComponents.push(
      <div className={`${selectedDay === i ? "selectedDay col-2  rounded-3" : "day col-2  rounded-3"}`} key={i}>
        <div className='text-center dayCard' onClick={()=>dispatch(setSelectedDay(i))}>
          <div >
            <DateComponent index={i} />
          </div>
          <div className='py-3 day-cloud'> <i className={icons[i]}></i></div>
          
        </div>
      </div>
    );
  }

  return dayComponents;
}

 return (
    <div className='dayForecast-section py-5 text-white'>
        <div className='row align-items-center justify-content-center'>
        {renderDayComponents()}
        </div>
    </div>
  )
}

export default Dayforecast