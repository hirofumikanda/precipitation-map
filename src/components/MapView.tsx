import React from "react";
import { useMap } from "../hooks/useMap";
import "../styles/map.css";

const MapView: React.FC = () => {
  const { mapContainerRef } = useMap();

  return (
    <>
      <div 
        ref={mapContainerRef} 
        style={{ width: "100%", height: "100vh" }} 
      />
    </>
  );
};

export default MapView;
