import React, { useEffect, useState } from "react";
import { Map, MapMarker, MapInfoWindow } from "react-kakao-maps-sdk";

import "./MapCenter.css";

function MapCenter({ stores }) {
  const [center, setCenter] = useState({ lat: 37.5642135, lng: 127.0016985 });
  const [level, setLevel] = useState(3);
  const [mapKey, setMapKey] = useState(0); // mapKey 상태 추가
  const [hoveredStore, setHoveredStore] = useState(null);

  useEffect(() => {
    if (stores.length > 0) {
      const firstStore = stores[0];
      setCenter({
        lat: firstStore.lat,
        lng: firstStore.lng,
      });
      setLevel(3);
    }
  }, [stores]);

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
      <Map id="map" center={center} level={level} key={mapKey}>
        {stores.map((store, index) => (
          <MapMarker
            key={index}
            position={{
              lat: store.lat,
              lng: store.lng,
            }}
            onMouseOver={() => setHoveredStore(store)}
            onMouseOut={() => setHoveredStore(null)}
            onClick={() => {
              window.open(`https://place.map.kakao.com/${store.id}`, "_blank");
            }}
          >
            {hoveredStore === store && <div>{store.name}</div>}
          </MapMarker>
        ))}
      </Map>
      <button
        onClick={moveToCurrentLocation}
        className="map-center-button"
      ></button>
    </div>
  );
}

export default MapCenter;
