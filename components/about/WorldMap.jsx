"use client";

import Image from "next/image";

// import {
//     ComposableMap,
//     Geographies,
//     Geography,
//     Marker,
//     ZoomableGroup,
// } from "react-simple-maps";
// import { useState } from "react";
// import { Tooltip as ReactTooltip } from "react-tooltip";
// import { IoLocation } from "react-icons/io5";

const geoUrl = "/features.json";
// const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const WorldMap = () => {
    // const [content, setContent] = useState("");

    // const specialLocations = [
    //     "United States",
    //     "United Kingdom",
    //     "Denmark",
    //     "Netherlands",
    //     "France",
    //     "India",
    //     "Saudi Arabia",
    //     "Peru",
    //     "Chile",
    //     "Australia",
    // ];

    // const locations = [
    //     { name: "USA", coordinates: [-103.2373, 39.5248] },
    //     { name: "England", coordinates: [-6.6749, 59.0774] },
    //     { name: "Denmark", coordinates: [5.2706, 62.5052] },
    //     { name: "Netherlands", coordinates: [1.7384, 59.1364] },
    //     { name: "France", coordinates: [-1.4761, 50.5348] },
    //     { name: "India", coordinates: [74.2707, 16.0827] },
    //     { name: "Saudi Arabia", coordinates: [45.4909, 23.6905] },
    //     { name: "Peru", coordinates: [-75.1635, -10.558] },
    //     { name: "Chile", coordinates: [-72.28, -22.1341] },
    //     { name: "Australia", coordinates: [134.389, -25.109] },
    // ];

    return (
        <section className='w-full px-2 py-4 md:py-10 md:px-14 xl:px-32'>
            <div className="relative w-full h-[35vh]  sm:h-[65vh] lg:h-[90vh] overflow-hidden">
                <Image alt="world map" src={"https://ik.imagekit.io/webibee/Rasim-Exports/world%201.svg"} fill className="object-contain object-center" />
            </div>
        </section>
    );
};

export default WorldMap;


// <section className='w-full px-6 md:px-14 xl:px-32'>
//     {/* <ComposableMap
//         projectionConfig={{
//             scale: 150,
//             center: [10, 20],
//         }}
//     >
//         <ZoomableGroup>
//             <Geographies geography={geoUrl}>
//                 {({ geographies }) =>
//                     geographies.map((geo) => {
//                         const isSpecialLocation = specialLocations.includes(
//                             geo.properties.name
//                         );
//                         return (
//                             <Geography
//                                 key={geo.rsmKey}
//                                 geography={geo}
//                                 style={{
//                                     default: {
//                                         fill: !isSpecialLocation ? "#314A75" : "#F4C400",
//                                         outline: "#38A3A5",
//                                     },
//                                     hover: {
//                                         fill: !isSpecialLocation ? "#314A75" : "#F4C400",
//                                         outline: "#38A3A5",
//                                     },
//                                     pressed: {
//                                         fill: !isSpecialLocation ? "#314A75" : "#F4C400",
//                                         outline: "#38A3A5",
//                                     },
//                                 }}
//                             />
//                         );
//                     })
//                 }
//             </Geographies>

//             {locations.map(({ name, coordinates }) => (
//                 <Marker key={name} coordinates={coordinates}>
//                     <IoLocation
//                         className="p-16 text-base text-[#FF0000] hover:cursor-pointer"
//                         onMouseEnter={() => setContent(name)}
//                         onMouseLeave={() => setContent("")}
//                         data-tooltip-id="tooltip"
//                         data-tooltip-content={name}
//                         data-tooltip-offset={10}
//                     />
//                 </Marker>
//             ))}
//         </ZoomableGroup>
//     </ComposableMap>
//     <ReactTooltip
//         className="!text-xl font-medium !bg-secondary !text-primary border-2 shadow-2xl border-primary font-libreCaslonDisplay tracking-custom"
//         id="tooltip"
//         content={`${content}`}
//         place="left"
//     /> */}
// </section>