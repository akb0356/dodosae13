const url = "gallery.json";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const gallery = document.querySelector("#gallery");
    // 데이터 안에 imgs 라는 key가 있어. ket를 가져올 때는 온점 표기법을 쓴다.
    data.images.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.path;
      imgElement.alt = image.caption;
      gallery.appendChild(imgElement);
    });
  })
  .catch((err) => console.log(`err : ${err}`));
