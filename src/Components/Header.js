import React from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { setUnits } from '../Store/Reducers'
import "../Assets/CSS/Header.scss"
import{ DateComponent, FormatTime} from './Date'


const Header = () => {
    const dispatch = useDispatch()
    const day = useSelector ((state)=>state.weather.selectedDay)
    const data = useSelector((state)=>state.weather.apiData[day * 8])

    const unit = useSelector ((state)=>state.weather.units)
    const changeUnit = (value)=>{
            dispatch(setUnits(value))
    }

  return (   
        <div className='header-section container'>            
                <div className='row justify-content-center align-items-center py-3'>
                    <div className='col-md-9 left-header'>
                        <div className='d-flex'>
                            <div className=' colud-icon text-white'>
                                <i className="bi bi-clouds-fill"></i>
                            </div>
                            <div className='temperature px-2 text-white'>
                                   { Math.floor(data.main.temp)} 
                            </div>
                            <div className='units d-flex text-white'>
                                    <div><p className= {`${unit=== "metric" ? "unit":"" } degree font-weight-bold`} onClick={()=>changeUnit("metric")}><b>C</b></p></div>|
                                    <div><p  className= {`${unit=== "imperial" ? "unit":""} degree font-weight-bold`} onClick={()=>changeUnit("imperial")}><b>F</b></p></div>
                            </div>
                            <div className='report'> 
                                <p>Humidity : {data.main.humidity} %</p>
                                <p>Speed : {data.wind.speed} {`${unit=== "imperial" ? "miles/hr":"meter/sec"} `} </p>
                                {/* <p>Humidity : {}</p> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3 right-header text-md-end'>
                        <h3 className='text-white'>Weather</h3>
                        <p className='date'>
                            <DateComponent index={day}/>
                            <FormatTime/>
                        </p>
                        <p className='text-capitalize date '>{data.weather[0].description}</p>
                    </div>
                </div>
            
        </div>
  )
}

export default Header