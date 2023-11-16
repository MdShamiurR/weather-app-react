import {
    UilSun,
    UilSunset,
    UilTear,
    UilTemperature,
    UilWind,
} from "@iconscout/react-unicons";
import React from 'react';

const Temperature = () => {
    return (
      <div>
        <div className="text-center my-6 transition ease-out hover:scale-125">
          <p className="text-white text-2xl">Cloudy</p>
        </div>
        <div className="flex items-center flex-row justify-between">
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            className="w-20 transition ease-out hover:scale-125"
          />
          <p className="text-orange-200 text-3xl transition ease-out hover:scale-125">
            34°
          </p>
          <div className="flex flex-col space-y-2 ">
            <div className="text-blue-800 flex items-center justify-center text-lg font-medium transition ease-out hover:scale-125">
              <UilTemperature className="mr-1"></UilTemperature>
              <p className="text-white">
                Temperature:
                <span className="text-xl font-light  ml-2">32°</span>
              </p>
            </div>
            <div className="text-blue-800 flex items-center justify-center text-lg font-medium transition ease-out hover:scale-125">
              <UilTear className="mr-1"></UilTear>
              <p className="text-white">
                Humidity:<span className="text-xl font-light  ml-2">60%</span>
              </p>
            </div>
            <div className="text-blue-800 flex items-center justify-center text-lg font-medium transition ease-out hover:scale-125">
              <UilWind className="mr-1"></UilWind>
              <p className="text-white">
                Wind:<span className="text-xl font-light  ml-2">2 km/h</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center flex-row justify-center space-x-2 text-sm py-3 ">
          <UilSun className="text-blue-800"></UilSun>
          <p className="font-light text-orange-200">
            Rise:<span className="font-medium ml-2 text-white">06:45 Am</span>
          </p>
          <p className="font-light text-white">|</p>
          <UilSunset className="text-blue-800"></UilSunset>
          <p className="font-light text-orange-200">
            Sunset:<span className="font-medium ml-2 text-white">05:45 Pm</span>
          </p>
          <p className="font-light text-white">|</p>
          <UilSun className="text-blue-800"></UilSun>
          <p className="font-light text-orange-200">
            High:<span className="font-medium ml-2 text-white">40°</span>
          </p>
          <p className="font-light text-white">|</p>
          <UilSun className="text-blue-800"></UilSun>
          <p className="font-light text-orange-200">
            Low:<span className="font-medium ml-2 text-white">29°</span>
          </p>
          
        </div>
      </div>
    );
};

export default Temperature;