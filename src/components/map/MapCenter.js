import React, { useState } from "react";
import { Map } from "react-kakao-maps-sdk";

import "./MapCenter.css";

function MapCenter() {
  const [center, setCenter] = useState({ lat: 33.5563, lng: 126.79581 });
  const [level, setLevel] = useState(3);
  const [mapKey, setMapKey] = useState(0); // mapKey 상태 추가

  const moveToCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setLevel(3);
          setMapKey((prevKey) => prevKey + 1); // mapKey 업데이트: 컴포넌트 리렌더링 강제 실행
        },
        (error) => {
          console.error("Geolocation error:", error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      alert("이 브라우저에서는 Geolocation이 지원되지 않습니다.");
    }
  };

  return (
    <div className="map-center">
      <Map id="map" center={center} level={level} key={mapKey} />
      <button
        onClick={moveToCurrentLocation}
        className="map-center-button"
      ></button>
    </div>
  );
}

export default MapCenter;
