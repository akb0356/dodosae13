const myfruits = prompt("과일을 입력해주세요");


//if문을 쓰는 경우는 선택지가 단일선택지, 이거 혹은 이거. 명확한 선택지 경우 if 를 쓴다.
//스위치는 값이 반드시 있어야함.
//맞다면 스위치문은 반드시 break를 붙여줘야한다.
switch (myfruits) {
  case "사과":
    alert("사과입니다.");
  case "귤":
    alert("귤입니다.");
    break;
  case "감":
    alert("감입니다.");
    break;
  default:
    alert("기타과일입니다.");
}
