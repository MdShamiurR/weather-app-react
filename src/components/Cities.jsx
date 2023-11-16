import React from 'react';

const Cities = () => {
    const cities =[
        {
            id:1,
            title:'Dhaka'
        },
        {
            id:2,
            title:'Barishal'
        },
        {
            id:3,
            title:'Khulna'
        },
        {
            id:4,
            title:'Chittagong'
        },
        {
            id:5,
            title:'Sylhet'
        },
    ]
    return (
      <div className="flex justify-around my-6">
        {cities.map((city) => (
          <button key={city.id} className='text-white text-lg font-medium'>{city.title}</button>
        ))}
      </div>
    );
};

export default Cities;