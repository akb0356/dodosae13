let numArra: number[] = [1, 2, 3];
let strArray: string[] = ["hello", "world"];

interface IPerson {
  name: string;
  age?: number;
}

//명시적으로 타입을 하나만 정의해주는것이 아니라 정의를 하기 위해서 함수 타입 정의가 필요하고 그 매개변수 타입정의를 하려면 interface까지 타고 올라가야해서 힘든것이다.
let personArray: IPerson[] = [{ name: "jack" }, { name: "jack", age: 32 }];


//실제 현업에서는 객체의 타입정의 80-90%는 interface 사용!
// 간혹 type 별칭 사용.
// type별칭 VS interface
// 100% 맞는 말은 아니나, 이렇게 생각하는게 정신건강에 좋음.
// type별칭의 경우 확장개념이 없다.
//interface:extends & implement & abstract