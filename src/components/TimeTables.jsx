import React from 'react';
import { formatToLocalTime } from '../service/service';

const TimeTables = ({ weather: { dt, timezone, name, country } }) => {
  // const {dt,timezone,name,country} = weather;
  console.log(country);
  return (
    <div>
      <div className="text-center my-6">
        <p className="text-orange-200 text-xl font-extralight transition ease-out hover:scale-125">
          {formatToLocalTime(dt,timezone)}
        </p>
      </div>
      <div className="text-center">
        <p className="text-orange-200 text-3xl font-bold transition ease-out hover:scale-125">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  );
};

export default TimeTables;