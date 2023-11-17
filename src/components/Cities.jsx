import React from 'react';

const Cities = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Dhaka",
    },
    {
      id: 2,
      title: "Barisal",
    },
    {
      id: 3,
      title: "Khulna",
    },
    {
      id: 4,
      title: "Chittagong",
    },
    {
      id: 5,
      title: "Sylhet",
    },
  ];
  return (
    <div className="grid grid-col-1 md:grid-cols-5 lg:grid-cols-5  my-6 ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-xl font-medium transition ease-out hover:scale-125"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default Cities;