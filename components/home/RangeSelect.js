import React, { useState } from 'react';

const RangeSelect = ({ onRadiusChange }) => {
  const [radius, setRadius] = useState(2500);

  return (
    <div className='mt-[300px] px-2'>
      <h2 className='font-bold'>Select Radius (In Meter)</h2>
      
      <input
        type='range'
        className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer'
        min="500"
        max="5000"
        step={500}
        onChange={(e) => {
          setRadius(e.target.value);
          onRadiusChange(e.target.value);
        }}
        value={radius} // Use controlled input
        style={{
          background: `linear-gradient(to right, #3b82f6 ${((radius - 500) / (5000 - 500)) * 100}%, #e5e7eb ${((radius - 500) / (5000 - 500)) * 100}%)`
        }}
      />
      <label className='text-black-900 text-[15px]'>{radius}m</label>
    </div>
  );
}

export default RangeSelect;
