const twBtn = document.querySelector("#tweetButton");
const twArea = document.querySelector("#tweetTextArea");
console.log(twBtn);
twBtn.addEventListener("click", () => {
  const twText = twArea.value;
  const encodedText = encodeURIComponent(twText);
  const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;
  window.open(tweetURL);
});

//디코딩(decoding) :: 코드화 되어있는 것을 해석할 때 사용하는 언어
// 인코딩(encoding) :: 일반 문자열로 되어있는 것을 코드화로 전환시킬 때 사용하는 용어
