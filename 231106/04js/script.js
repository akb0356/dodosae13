let showPosition = (position) => {
  document.querySelector("#result").innerHTML = `
  <b>위도 :: </b> ${position.coords.latitude.toFixed(
    2
  )}, <b>경도 :: </b> ${position.coords.longitude.toFixed(2)}
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
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximunAge: 0,
    };
    let watchId = navigator.geolocation.watchPosition(
      showPosition,
      errorPosition,
      options
    );

    setTimeout(() => {
      navigator.geolocation.clearWatch(watchId);
    }, 300000);
  } else {
    alert("geolocation을 지원하지 않습니다.");
  }
});
