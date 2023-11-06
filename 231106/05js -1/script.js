// 카카오맵을 이용해서 우리의 위치를 파악하자
// 카카오맵을 활용해서 전국에 존재하는 캠핑장을 마커로 찍어보자.
//https://github.com/public-apis/public-apis

const lat = 37.5025398;
const lng = 127.0248679;

let container = document.querySelector("#map"); //지도를 담을 영역의 DOM 레퍼런스
let options = {
  //지도를 생성할 때 필요한 기본 옵션
  center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
  level: 3, //지도의 레벨(확대, 축소 정도)
};

let map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

//마커가 표시 될 위치 정의
let markerPosition = new kakao.maps.LatLng(lat, lng);

//마커 생성하기
let marker = new kakao.maps.Marker({
  position: markerPosition,
});

//지도 위에 마커 출력하기
marker.setMap(map);

let iwContent = `<div><a href="https://gn.ezenac.co.kr/" target="_blank">EZEN ACADEMY 강남점</a></div>`;
let iwRemoveable = true;

//프로퍼티의 속성값이나 메서드로 들어오는건 대소문자 칼같이써
let infowindow = new kakao.maps.InfoWindow({
  content: iwContent,
  removeable: iwRemoveable,
});

// 마커 클릭 시 출력되는 이벤트 정의 (마커에 이벤트 줄거고, 클릭하면 이벤트 열리게 할거고, 이런 함수를 줄게)
kakao.maps.event.addListener(marker, "click", () => {
  //infowindow에서 open 메서드 쓸건데 매개변수로 map과 marker 쓸거임
  infowindow.open(map, marker);
});
