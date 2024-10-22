"use client"
import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { IoLocation } from "react-icons/io5";

// const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";
const geoUrl = "/features.json"

const markers = [
  { name: "France", coordinates: [-3.0099, 52.2276] },
  { name: "Denmark", coordinates: [2.5018, 60.2639] },
  { name: "Australia", coordinates: [123.7751, -20.2744] },
  { name: "Dubai", coordinates: [50.2708, 30.2048] },
  { name: "India", coordinates: [74.2707, 16.0827] },
  { name: "USA", coordinates: [-95.7129, 37.0902] },
  { name: "England", coordinates: [-0.1278, 51.5074] },
  { name: "Netherlands", coordinates: [4.8951, 52.3702] },
  { name: "Peru", coordinates: [-70.6484, -9.1899] },
  { name: "Saudi Arabia", coordinates: [46.7723, 23.5700] },
  { name: "Chile", coordinates: [-70.6484, -33.4378] },
];

const WorldDistributors = () => {
  const [hoveredLocation, setHoveredLocation] = useState(null);

  return (
    <section className='w-full px-6 py-10 md:px-14 xl:px-32 md:py-12'>
      <ComposableMap className="w-full shadow-sm">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} className="fill-primary stroke-white" />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates }, i) => (
          <Marker key={i} coordinates={coordinates} onMouseEnter={() => setHoveredLocation(name)}
            onMouseLeave={() => setHoveredLocation(null)}>
            {/* <circle r={5} fill="#ffffff" /> */}
            <IoLocation className="text-2xl text-orange-500 hover:cursor-pointer" />
            {hoveredLocation === name && (
              <text
                x={10}
                y={3}
                fontSize={24}
                fill="#F97316"
                className="p-4 mb-5 font-semibold backdrop-brightness-50 rounded-xl bg-secondary text-primary"
                textAnchor="middle"
              >
                {name}
              </text>
            )}
          </Marker>
        ))}
      </ComposableMap>
    </section>
  )
}

export default WorldDistributors
