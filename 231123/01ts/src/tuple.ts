// ts에서는 tuple이라는 타입이 존재한다. :: 배열타입의 종류

//any[]를 속성값으로 줄 수도 있음. (but 최선은 아님) 
//tuple은 배열안에 들어가있는 값을 동일하게 배열형식으로 쓰고 안에 들어가는 타입을 다이렉트로 적어줘도 가능하다.
//tuple은 배열의 타입을 정의하는 종류중 하나로 boolean과 string 타입의 배열을 가질 수 있게 된 것.
let tuple: [boolean, string] = [true, "theresult is ok"];
