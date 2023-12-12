//이미지 드랍할 공간 정의
const fileZone = document.querySelector(".file-zone");
const imgPrevarea = document.querySelector(".image-list");

//filezone 영역에 이미지가 드랍되었다는 사실을 알 수 있도록 이벤트를 정의

fileZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});
fileZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const displayImages = (transferedFiles) => {
    const imageFileList = [];
    const fileNum = transferedFiles.length;
    for (let i = 0; i < fileNum; i++) {
      //정규표현식에서 *는 타입이나 확장자 속성 상관 없이 image만 가지고 있다면
      if (transferedFiles[i].type.match("image.*") === false) {
        return;
      }
      imageFileList.push(transferedFiles[i]);
    }
    for (let imageFile of imageFileList) {
      const fileReader = new FileReader();
      //이미지파일리스트 배열 안에 들어있는 각각의 이미지 경로값을 확인해준다.
      fileReader.readAsDataURL(imageFile);
      fileReader.addEventListener("load", () => {
        const image = new Image();
        image.src = e.target.result;
        imgPrevarea.insertBefore(image, imgPrevarea.firstChild);
      });
    }
  };
  const transferedFiles = e.dataTransfer.files;
  displayImages(transferedFiles);
});

//특정요소를 웹브라우저 안에서 드래그 & 드랍 기능을 사용했을 때, 드롭한 해당 요소의 파일 정보를 읽어내는 이벤트 속성 존재!
// e.dataTransfer.files()
