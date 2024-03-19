import React, { useState } from "react";
import "../shared/SearchBar.css";

// 장소 검색 객체 생성
var ps = new window.kakao.maps.services.Places();

// 인포윈도우 생성
var infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

// CallBack: 장소검색 완료 시 호출
function placesSearchCB(data, status, pagination, updateStores) {
  if (status === window.kakao.maps.services.Status.OK) {
    // 검색 결과 매핑
    const newStores = data.map((place, index) => ({
      id: index, // 고유 ID
      name: place.place_name,
      rating: "★★★★",
      address: place.road_address_name,
      hours: "09:00-22:00",
      telephone: place.phone,
    }));

    // 상위 컴포넌트의 상태 업데이트 함수 호출
    updateStores(newStores, pagination);
    displayPlaces(data);
    displayPagination(pagination);
  } else if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
    alert("검색 결과가 존재하지 않습니다.");
    return;
  } else if (status === window.kakao.maps.services.Status.ERROR) {
    alert("검색 결과 중 오류가 발생했습니다.");
    return;
  }
}

// 검색 결과 목록 및 마커 표시
function displayPlaces(places) {
  var bounds = new window.kakao.maps.LatLngBounds();

  for (var i = 0; i < places.length; i++) {
    // 마커 생성 및 지도에 표시
    var placePosition = new window.kakao.maps.LatLng(places[i].y, places[i].x),
      marker = addMarker(placePosition, i),
      itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element 생성
    // 검색된 장소 위치를 기준으로 지도 범위 재설정: LatLngBounds 객체에 좌표 추가
    bounds.extend(placePosition);

    // Mouseover: 인포윈도우 표시
    // Mouseout; 인포윈도우 닫기
    (function (marker, title) {
      window.kakao.maps.event.addListener(marker, "mouseout", function () {
        infowindow.close();
      });

      itemEl.onmouseout = function () {
        infowindow.close();
      };
    })(marker, places[i].place_name);
  }
}

// 검색결과 항목을 Element로 반환
function getListItem(index, places) {
  var el = document.createElement("li"),
    itemStr =
      '<span class="markerbg marker_' +
      (index + 1) +
      '"></span>' +
      '<div class="info">' +
      "   <h5>" +
      places.place_name +
      "</h5>";

  if (places.road_address_name) {
    itemStr +=
      "    <span>" +
      places.road_address_name +
      "</span>" +
      '   <span class="jibun gray">' +
      places.address_name +
      "</span>";
  } else {
    itemStr += "    <span>" + places.address_name + "</span>";
  }

  itemStr += '  <span class="tel">' + places.phone + "</span>" + "</div>";

  el.innerHTML = itemStr;
  el.className = "item";

  return el;
}

// 지도 위에 마커
function addMarker(position, idx, title) {
  var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",
    imageSize = new window.kakao.maps.Size(36, 37),
    imgOptions = {
      spriteSize: new window.kakao.maps.Size(36, 691),
      spriteOrigin: new window.kakao.maps.Point(0, idx * 46 + 10),
      offset: new window.kakao.maps.Point(13, 37),
    },
    markerImage = new window.kakao.maps.MarkerImage(
      imageSrc,
      imageSize,
      imgOptions
    ),
    marker = new window.kakao.maps.Marker({
      position: position,
      image: markerImage,
    });

  return marker;
}

// 페이지 번호
function displayPagination(pagination) {
  var paginationEl = document.getElementById("pagination"),
    fragment = document.createDocumentFragment(),
    i;

  for (i = 1; i <= pagination.last; i++) {
    var el = document.createElement("a");
    el.href = "#";
    el.innerHTML = i;

    if (i === pagination.current) {
      el.className = "on";
    } else {
      el.onclick = (function (i) {
        return function () {
          pagination.gotoPage(i);
        };
      })(i);
    }
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
    ps.keywordSearch(searchPlace, (data, status, pagination) =>
      placesSearchCB(data, status, pagination, props.updateStores)
    ); // props.updateStores를 콜백에 전달
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
