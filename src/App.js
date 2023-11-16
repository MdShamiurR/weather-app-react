import { useEffect, useState } from 'react';
import './App.css';
import Cities from './components/Cities';
import Filtering from './components/Filtering';
import FiveDaysForecast from './components/FiveDaysForecast';
import Temperature from './components/Temperature';
import TimeTables from './components/TimeTables';
import getFormattedData from './service/service';


function App() {

  const [query,setQuery]=useState({q:'berlin'})
  const [units,setUnits]=useState('metric')
  const [weather,setWeather]=useState(null)

 useEffect(()=>{
   const fetchWeather=async ()=>{
     await getFormattedData({...query,units}).then(data=>{
      setWeather(data)
     })
    
  }
  fetchWeather()
 },[query,units])

  return (
    <div className='mx-auto max-w-screen-md mt-4 p-24 bg-gradient-to-br from-zinc-700 to-black h-fit shadow-xl shadow-gray-400 rounded-md '>
      
    
      <Cities></Cities>
      <Filtering></Filtering>
    {weather && (
      <div>
      <TimeTables weather={weather}></TimeTables>
      <Temperature weather={weather}></Temperature>
      <FiveDaysForecast title="Hourly Forecase"></FiveDaysForecast>
      <FiveDaysForecast title="Daily Forecase"></FiveDaysForecast>
      </div>

    )}

      
     
      
    </div>
  );
}

export default App;
