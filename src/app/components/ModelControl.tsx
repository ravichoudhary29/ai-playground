'use client';
import React, { useState } from 'react';

const ModelControl: React.FC = () => {
  const [temperature, setTemperature] = useState(1.0);

  const handleTemperatureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemperature(parseFloat(e.target.value));
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Model Controls</h2>
      <label className="block mb-2">
        Temperature: <strong>{temperature}</strong>
        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          value={temperature}
          onChange={handleTemperatureChange}
          className="w-full mt-2"
        />
      </label>
      {/* Add more controls as needed */}
    </div>
  );
};

export default ModelControl;