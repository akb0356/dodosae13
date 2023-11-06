const url =
  "http://apis.data.go.kr/B551011/GoCamping/basedList?serviceKey=KIVpqOxUFsfDb%2Fno18bc7gyR6dIKZ7ae5vWAD2i0LlUcQIuaSLwd6uQu%2B%2FDFMm%2B5u5DEiQSt3dHE9unzUgYglQ%3D%3D&MobileOS=ETC&MobileApp=appTest&_type=json&numOfRows=100&pageNo=1";

fetch(url)
  .then((result) => result.json())
  .then((json) => {
    const data = json.response.body.items.item;
    let markers = [];
    for (let i = 0; i < data.lenght; i++) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(data[i].mapY, data[i].mapX),
      });
      markers.push(marker);
      let infowindow = new kakao.maps.InfoWindow({
        contents: data[i].facltNm,
      });
      let makeOverListener = (map, marker, infowindow) => {
        return () => {
          infowindow.open(map, marker);
        };
      };
      let makeOutListener = (infowindow) => {
        return () => {
          infowindow.close();
        };
      };
      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );
    }
    clusterer.addMarkers(markers);
  });

let lat = 37.5025398;
let lng = 127.0248679;

let mapContainer = document.querySelector("#map");
let mapOption = {
  center: new kakao.maps.LatLng(lat, lng),
  level: 14,
};
let map = new kakao.maps.Map(mapContainer, mapOption);

let clusterer = new kakao.maps.MarkerClusterer({
  map: map,
  averageCenter: true,
  minLevel: 10,
});
