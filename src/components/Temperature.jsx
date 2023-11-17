import {
  UilSun,
  UilSunset,
  UilTear,
  UilTemperature,
  UilWind,
} from "@iconscout/react-unicons";
import React from 'react';
import { formatToLocalTime, iconUrlFromCode } from "../service/service";

const Temperature = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) => {
  return (
    <div>
      <div className="text-center my-6 transition ease-out hover:scale-125">
        <p className="text-white text-2xl">{details}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4">
        <img
          src={iconUrlFromCode(icon)}
          alt=""
          className="w-20 transition ease-out hover:scale-125 mb-4 md:mb-0"
        />
        <p className="text-orange-200 text-3xl transition ease-out hover:scale-125">
          {temp}°
        </p>
        <div className="flex flex-col space-y-2">
          <div className="text-blue-800 flex items-center justify-center text-lg font-medium transition ease-out hover:scale-125">
            <UilTemperature className="mr-1"></UilTemperature>
            <p className="text-white">
              Feels Like:
              <span className="text-xl font-light  ml-2">{feels_like}°</span>
            </p>
          </div>
          <div className="text-blue-800 flex items-center justify-center text-lg font-medium transition ease-out hover:scale-125">
            <UilTear className="mr-1"></UilTear>
            <p className="text-white">
              Humidity:
              <span className="text-xl font-light  ml-2">{humidity}%</span>
            </p>
          </div>
          <div className="text-blue-800 flex items-center justify-center text-lg font-medium transition ease-out hover:scale-125">
            <UilWind className="mr-1"></UilWind>
            <p className="text-white">
              Wind:
              <span className="text-xl font-light  ml-2">{speed} km/h</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col md:flex-row items-center justify-center space-y-2 md:space-x-2 text-sm py-3 ">
        <div className="flex items-center">
          <UilSun className="text-blue-800"></UilSun>
          <p className="font-light text-orange-200">
            Rise:
            <span className="font-medium ml-2 text-white md:inline-block">
              {formatToLocalTime(sunrise, timezone, "hh:mm a")}
            </span>
          </p>
        </div>
        <p className="font-light text-white md:inline-block hidden md:block">
          |
        </p>
        <div className="flex items-center">
          <UilSunset className="text-blue-800"></UilSunset>
          <p className="font-light text-orange-200">
            Sunset:
            <span className="font-medium ml-2 text-white md:inline-block">
              {formatToLocalTime(sunset, timezone, "hh:mm  a")}
            </span>
          </p>
        </div>
        <p className="font-light text-white md:inline-block hidden md:block">
          |
        </p>
        <div className="flex items-center">
          <UilSun className="text-blue-800"></UilSun>
          <p className="font-light text-orange-200">
            High:
            <span className="font-medium ml-2 text-white md:inline-block">
              {temp_max}°
            </span>
          </p>
        </div>
        <p className="font-light text-white md:inline-block hidden md:block">
          |
        </p>
        <div className="flex items-center">
          <UilSun className="text-blue-800"></UilSun>
          <p className="font-light text-orange-200">
            Low:
            <span className="font-medium ml-2 text-white md:inline-block">
              {temp_min}°
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Temperature;


// import {
//   UilSun,
//   UilSunset,
//   UilTear,
//   UilTemperature,
//   UilWind,
// } from "@iconscout/react-unicons";
// import React from 'react';
// import { formatToLocalTime, iconUrlFromCode } from "../service/service";

// const Temperature = ({
//   weather: {
//     details,
//     icon,
//     temp,
//     temp_min,
//     temp_max,
//     sunrise,
//     sunset,
//     speed,
//     humidity,
//     feels_like,
//     timezone,
//   },
// }) => {
//   return (
//     <div>
//       <div className="text-center my-6 transition ease-out hover:scale-125">
//         <p className="text-white text-2xl">{details}</p>
//       </div>
//       <div className="flex items-center flex-row justify-between">
//         <img
//           src={iconUrlFromCode(icon)}
//           alt=""
//           className="w-20 transition ease-out hover:scale-125"
//         />
//         <p className="text-orange-200 text-3xl transition ease-out hover:scale-125">
//           {temp}°
//         </p>
//         <div className="flex flex-col space-y-2 ">
//           <div className="text-blue-800 flex items-center justify-center text-lg font-medium transition ease-out hover:scale-125">
//             <UilTemperature className="mr-1"></UilTemperature>
//             <p className="text-white">
//               Feels Like:
//               <span className="text-xl font-light  ml-2">{feels_like}°</span>
//             </p>
//           </div>
//           <div className="text-blue-800 flex items-center justify-center text-lg font-medium transition ease-out hover:scale-125">
//             <UilTear className="mr-1"></UilTear>
//             <p className="text-white">
//               Humidity:
//               <span className="text-xl font-light  ml-2">{humidity}%</span>
//             </p>
//           </div>
//           <div className="text-blue-800 flex items-center justify-center text-lg font-medium transition ease-out hover:scale-125">
//             <UilWind className="mr-1"></UilWind>
//             <p className="text-white">
//               Wind:
//               <span className="text-xl font-light  ml-2">{speed} km/h</span>
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="mt-4 flex items-center flex-row justify-center space-x-2 text-sm py-3 ">
//         <UilSun className="text-blue-800"></UilSun>
//         <p className="font-light text-orange-200">
//           Rise:
//           <span className="font-medium ml-2 text-white">
//             {formatToLocalTime(sunrise, timezone, "hh:mm a")}
//           </span>
//         </p>
//         <p className="font-light text-white">|</p>
//         <UilSunset className="text-blue-800"></UilSunset>
//         <p className="font-light text-orange-200">
//           Sunset:
//           <span className="font-medium ml-2 text-white">
//             {formatToLocalTime(sunset, timezone, "hh:mm  a")}
//           </span>
//         </p>
//         <p className="font-light text-white">|</p>
//         <UilSun className="text-blue-800"></UilSun>
//         <p className="font-light text-orange-200">
//           High:<span className="font-medium ml-2 text-white">{temp_max}°</span>
//         </p>
//         <p className="font-light text-white">|</p>
//         <UilSun className="text-blue-800"></UilSun>
//         <p className="font-light text-orange-200">
//           Low:<span className="font-medium ml-2 text-white">{temp_min}°</span>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Temperature;