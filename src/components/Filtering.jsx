import { UilTelescope, UilUserLocation } from "@iconscout/react-unicons";
import React from 'react';

const Filtering = () => {
    return (
      <div className="text-white flex flex-row justify-center my-6">
        <div className="flex flex-row w-2/3 items-center justify-center space-x-5">
          <input
            type="text"
            placeholder="Find Your Cities..."
            className="text-xl text-gray-800 font-semibold p-2 w-full shadow-xl focus:outline-none rounded capitalize"
          />
          <UilTelescope
            className=" text-orange-300 cursor-pointer transition ease-out hover:scale-x-125"
            size={40}
          ></UilTelescope>
          <div>
            <UilUserLocation
              className="text-blue-700 cursor-pointer transition ease-out hover:scale-125"
              size={30}
            ></UilUserLocation>
          </div>
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button name="metric" className="text-2xl text-blue-700 font-bold">
            °C
          </button>
          <p className="text-3xl mx-1">|</p>
          <button name="imperial" className="text-2xl text-blue-700 font-bold">
            °F
          </button>
        </div>
      </div>
    );
};

export default Filtering;