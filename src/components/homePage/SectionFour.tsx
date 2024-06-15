"use client";

import * as React from "react";
import { PiTShirtLight, PiBatteryChargingLight } from "react-icons/pi";
import { FaPaw, FaMapMarkerAlt, FaMapMarker } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import Map, { NavigationControl, Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const mockData = [
  { longitude: 30.51989, latitude: 50.455296, type: "help_clothing" },
  { longitude: 30.441325, latitude: 50.471207, type: "help_animals" },
  { longitude: 30.623888, latitude: 50.436319, type: "help_food" },
  { longitude: 30.47446, latitude: 50.423733, type: "need_electricity" },
  { longitude: 30.482049, latitude: 50.457969, type: "resilience_point" },
];

const getIcon = (type: string) => {
  switch (type) {
    case "help_clothing":
      return <PiTShirtLight className="text-white h-4 w-4" />;
    case "help_animals":
      return <FaPaw className="text-white h-4 w-4" />;
    case "help_food":
      return <IoFastFoodSharp className="text-white h-4 w-4" />;
    case "need_electricity":
      return <PiBatteryChargingLight className="text-white h-4 w-4" />;
    case "resilience_point":
      return <FaMapMarkerAlt className="text-white h-4 w-4" />;
    default:
      return null;
  }
};

function SectionFour() {
  return (
    <div className="">
      <h1 className="text-6xl mb-10 px-16">Мапа допомоги</h1>

      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        initialViewState={{
          latitude: 50.450001,
          longitude: 30.523333,
          zoom: 12,
        }}
        style={{ width: "100%", height: 663 }}
        maxZoom={20}
        minZoom={3}
        scrollZoom={false}
      >
        <NavigationControl />

        {mockData.map((point, index) => (
          <Marker
            key={index}
            longitude={point.longitude}
            latitude={point.latitude}
            anchor="bottom"
          >
            <div className="relative h-10 w-10 text-[#b92121] flex justify-center items-center">
              <FaMapMarker className="absolute top-0 left-0 h-10 w-10" />
              <div className="absolute bottom-1 left-0 h-10 w-10 flex justify-center items-center">
                {getIcon(point.type)}
              </div>
            </div>
          </Marker>
        ))}
      </Map>
    </div>
  );
}

export default SectionFour;
