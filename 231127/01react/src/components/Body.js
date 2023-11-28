// import React from "./react";
function Body(props) {
  console.log(props);
  const { name, location } = props;
  //컴포넌트 안에 출력되어지는 것을 return문이라고 하는데 이 값에 뭔가 저장하고 싶으면 (컴포넌트는 함수다)
  // 지금 작성하고 있는 이 문법이 jsx이다.
  //stringa + b 같은 연산작업도 가능하다.
  // const stringA = "안녕 ";
  // const stringB = "React!";

  // const boolA = true;
  // const boolB = false;
  //jsx 문법에서는 항상 특별한 조건식이 있는게 아닌이상 좌항부터 시작한다. :: 단락회로평가
  //      <h2>{String(boolA || boolB)}</h2>
  //react의 출력문에 원시타입 자료는 특정한 제약조건없이 입출력이 가능하나 객체타입 자료는 원천적으로 불가!
  //단 객체 안에있는 key값은 온점표기법을 활용하여 가져올 수 있다. 객체 자체는 절대 가져올 수 없음!
  //    <div>
  //   <h1>Body</h1>
  //   <h2>a: {objA.a}</h2>
  //   <h2>b: {objA.b}</h2>
  // </div>
  //jsx 문법에서 반드시 지켜야하는 유의사항.
  // 1. 객체타입은 절대로 직접적으로
  // const objA = {
  //   a: 1,
  //   b: 2,
  // };
  // const num = 19;
  //  <h2>
  // {num}은 {num % 2 === 0 ? "짝수" : "홀수"}
  // </h2>
  // 컴포넌트 부모에서 자식에게로 내려가는 일밖에 안댐
  // 반드시 가져올 때 객체로 가져옴.
  return (
    <>
      <div>
        <h1>
          {name}는 {location}에 거주중입니다
        </h1>
      </div>
    </>
  );
}

export default Body;
