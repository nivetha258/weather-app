// WeatherAPI.js
import { useEffect } from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setAPIData } from '../Store/Reducers';

const WeatherAPI = () => {
  const key = '0dba95d4614a12636329ca02ac3037b7';
  const location = useSelector((state)=>state.weather.location)
  const unit = useSelector((state)=>state.weather.units)
  const data =  useSelector((state)=>state.weather.apiData)
  console.log("da",data)
    const dispatch = useDispatch()

  useEffect(() => {

    if (location && unit) {
        const fetchData = async () => {
          try {
            const api = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${key}&units=${unit}`;
            const response = await axios.get(api);
            console.log('API Response:', response.data.list);
            dispatch(setAPIData(response.data.list))
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
  
        fetchData();
      }
  }, [location,unit]);

  return null; 
};

export default WeatherAPI;
