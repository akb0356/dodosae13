let url = "https://reqres.in/api/products/10";
let result = document.querySelector("#result");

let xhr = new XMLHttpRequest();
// 서버에 데이터를 요청하기
// open(방식, 가지고 올 데이터의 경로, 동기 비동기방식)
xhr.open("get", url, true);
xhr.send();
console.log(xhr);

//xhr이 변한다면 다음 함수를 실행시켜주세요
xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let product = JSON.parse(xhr.responseText);
    result.innerHTML = `
    <p>상품명 : ${product.data.name}</p>
    <p>출시연도 : ${product.data.year}년</p>
    `;
  }
};
