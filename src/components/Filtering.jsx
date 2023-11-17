

import { UilTelescope, UilUserLocation } from "@iconscout/react-unicons";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { API_KEY } from "../service/service";

const Filtering = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const handleSearchClick = async () => {
    try {
      if (city !== "") {
        setError(null);
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
        );
        if (!response.ok) {
          // setError("Invalid city. Please enter a valid city name.");
          toast.error(`Invalid ${city}. Please enter a valid city name.`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          return;
        }
        else{
          toast.success(`${city.toUpperCase()} Successfully Retrived`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }

        const data = await response.json();
        setQuery({ q: city, lat: data.coord.lat, lon: data.coord.lon });
      }
    } catch (error) {
      console.error("An error occurred while fetching weather data:", error);
      setError("An error occurred. Please try again.");
    }
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            setError(null);

            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
            );
            if (!response.ok) {
              // Handle the case where the API request was not successful
              // setError("Unable to retrieve weather data for your location.");
              toast.error(
                "🦄 Unable to retrieve weather data for your location!",
                {
                  position: "bottom-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                }
              );
              return;
            }

            setQuery({ lat, lon });
          } catch (error) {
            console.error(
              "An error occurred while fetching weather data:",
              error
            );
            setError("An error occurred. Please try again.");
          }
        },
        (error) => {
          console.error("Error getting location:", error);
          setError("Unable to retrieve your location. Please try again.");
        }
      );
    }
  };

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  return (
    <div className="text-white flex flex-col md:flex-row items-center justify-center my-6 space-y-4 md:space-y-0 md:space-x-4">
      <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="Find Your Cities..."
          className="text-xl text-gray-800 font-semibold p-2 w-full md:w-72 lg:w-96 shadow-xl focus:outline-none rounded capitalize"
        />
        <UilTelescope
          onClick={handleSearchClick}
          className="text-orange-300 cursor-pointer transition ease-out hover:scale-x-125"
          size={40}
        ></UilTelescope>
        <UilUserLocation
          onClick={handleLocation}
          className="text-blue-700 cursor-pointer transition ease-out hover:scale-125"
          size={30}
        ></UilUserLocation>
      </div>

      <div className="w-full md:w-1/4 flex flex-row md:flex-col items-center justify-center space-y-4 md:space-y-0">
        <div className="flex">
          <button
            name="metric"
            className="text-2xl text-blue-700 font-bold transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °C
          </button>
          <p className="text-3xl mx-1 hidden md:block lg:hidden">|</p>
          <p className="text-3xl mx-1 md:hidden lg:block">|</p>
          <button
            name="imperial"
            className="text-2xl text-blue-700 font-bold transition ease-out hover:scale-125"
            onClick={handleUnitsChange}
          >
            °F
          </button>
        </div>
      </div>

      {error && <p className="text-red-500 mt-2 w-full">{error}</p>}
    </div>
  );
};

export default Filtering;

