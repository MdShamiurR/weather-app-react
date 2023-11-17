import { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import img from '../../weather-app-react/src/image/7266036c9f3383d21730484150602f01.gif';
import './App.css';
import Cities from './components/Cities';
import Filtering from './components/Filtering';
import FiveDaysForecast from './components/FiveDaysForecast';
import Temperature from './components/Temperature';
import TimeTables from './components/TimeTables';
import getFormattedData from './service/service';


function App() {
  const [query,setQuery]=useState({q:'dhaka'})
  const [units,setUnits]=useState('metric')
  const [weather,setWeather]=useState(null)
  const [loading,setLoading]=useState(false)

 useEffect(()=>{
   const fetchWeather=async ()=>{
    setLoading(true)

     await getFormattedData({...query,units}).then(data=>{
      setLoading(false)
      setWeather(data)
     })
    
  }
  fetchWeather()
 },[query,units])

 const formatBackground = () => {
    if (!weather) return "from-zinc-700 to-black";
    const threshold = units === "metric" ? 35 : 60;
    if (weather.temp <= threshold) return "from-zinc-700 to-black";

    return "from-red-700 to-gray";
  };

  return (
    <div>
      {
        loading ? <div className="flex items-center justify-center h-screen">
  <img src={img}></img>
</div> : <div className={`mx-auto max-w-screen-md  px-4 pt-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 pb-16 bg-gradient-to-br from-zinc-700 to-black h-fit shadow-xl shadow-gray-400 rounded-md ${formatBackground()}`}>
  <Cities setQuery={setQuery}></Cities>
  <Filtering setQuery={setQuery} units={units} setUnits={setUnits}></Filtering>
  {weather && (
    <div>
      <TimeTables weather={weather}></TimeTables>
      <Temperature weather={weather}></Temperature>
      <FiveDaysForecast title="Daily Forecase" items={weather.daily}></FiveDaysForecast>
    </div>
  )}
</div>
      }
    
    </div>
  );
}

export default App;
