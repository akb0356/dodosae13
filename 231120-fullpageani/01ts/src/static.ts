// class 생성자를 사용할 때, 정적인 요소의 기능을 추가할 수 있었다.

// class A {
//   initValue = 1;
// }

// let initVal = A.initValue

// let initVal = new A();
// let result = initVal.initValue;
// console.log(result);

//프로토타입으로만 가져오는 것이 아니라 다이렉트로 뽑을 수 있다.
//static :: 정적으로 바꿔주는 키워드
class A {
  static initValue = 1;
}

let initVal = A.initValue;
console.log(initVal);

class C {
  //static을 붙인순간 프로토타입 함수를 거치지않고 다이렉트로 뽑기가능
  //반환값이 문자열이 붙었으니 해당 식의 값에 string 문자열 값을 정의해주는 것이 정석이다.
  static whoAreYou(): string {
    return `Im class C`;
  }
}
class D {
  static whoAreYou(): string {
    return `Im class D`;
  }
}

console.log(C.whoAreYou());
console.log(D.whoAreYou());


