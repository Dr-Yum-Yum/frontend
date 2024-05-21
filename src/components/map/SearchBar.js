import React, { useState } from "react";
import "../shared/SearchBar.css";

// 장소 검색 객체 생성
var ps = new window.kakao.maps.services.Places();

// CallBack: 장소검색 완료 시 호출
function placesSearchCB(data, status, pagination, updateStores) {
  if (status === window.kakao.maps.services.Status.OK) {
    // 검색 결과 매핑
    const newStores = data.map((place) => ({
      id: place.id, // 고유 ID
      name: place.place_name,
      rating: "★★★★",
      address: place.road_address_name,
      hours: "09:00-22:00",
      telephone: place.phone,
      lat: place.y,
      lng: place.x,
    }));

    // 상위 컴포넌트의 상태 업데이트 함수 호출
    updateStores(newStores, pagination);
  } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
    alert("검색 결과가 존재하지 않습니다.");
    return;
  } else if (status === window.kakao.maps.services.Status.ERROR) {
    alert("검색 결과 중 오류가 발생했습니다.");
    return;
  }
}

function SearchBar(props) {
  const [keyword, setKeyword] = useState("");

  const searchPlaces = () => {
    console.log("searchPlaces");

    const searchPlace = keyword + " 맛집";

    if (!keyword.replace(/^\s+|\s+$/g, "")) {
      alert("검색어를 입력해주세요!");
      return false;
    }

    // 키워드 검색 요청
    ps.keywordSearch(searchPlace, (data, status, pagination) => {
      const curAddress = data[0].road_address_name.split(" ");
      props.updateAddress(`${curAddress[0]} ${curAddress[1]}`);
      placesSearchCB(data, status, pagination, props.updateStores);
    }); // props.updateStores를 콜백에 전달
  };

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="map-search-bar">
      <input
        type="text"
        placeholder="메뉴 및 지역 검색"
        value={keyword}
        onChange={handleInputChange}
      />
      <button onClick={searchPlaces} type="submit"></button>
    </div>
  );
}

export default SearchBar;
