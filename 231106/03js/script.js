let showPosition = (position) => {
  document.querySelector("#result").innerHTML = `
  <b>위도 :: </b> ${position.coords.latitude.toFixed(2)}, <b>경도 :: </b> ${
    position.coords.longitude.toFixed(2)
  }
  `;
};

let errorPosition = (err) => {
  alert(err.message);
};
const getLocation = document.querySelector("#getLocation");
getLocation.addEventListener("click", (e) => {
  e.preventDefault();
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, errorPosition);
  } else {
    alert("geolocation을 지원하지 않습니다.");
  }
});
