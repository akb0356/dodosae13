interface INameable {
  name: string;
}

function getName(o: INameable) {
  return o != undefined ? o.name : "unknown name";
}
let n = getName(undefined);

console.log(n);

//만약 js 로또 추첨 프로그래밍 코드
// math 6개 숫자 랜덤 방식 생성
// 아무런 아이템도 담겨있지 않은 비어있는 배열안에
// 값이 생성될 때마다 push에서 메서드로 해당 배열에 값을 하나씩 넣어주었다.

//있어도 없어도 되는 키를 정의할 때 선택적 프로퍼티를 사용했다.(optional property)
interface IAgeable {
  age?: number;
}
function getAge(o: IAgeable) {
  return o != undefined && o.age ? o.age : 0;
}
console.log(getAge(null));
console.log(getAge(undefined));
console.log(getAge({ age: 32 }));
