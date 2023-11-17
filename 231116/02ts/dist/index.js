"use strict";
// 리액트에서 자주 사요요하는 styled-component
// 쓰면 난 왜 그동안 css를 쓴거지? 싶을정도로 스타일 커스텀이 자유롭다.
Object.defineProperty(exports, "__esModule", { value: true });
// import styled from styled-componnent:
//리액트 외 굉장히 규모가 큰 프로젝트를 하면 js 파일만 수십개.
//각각의 기능을 가진 js파일을 하나하나 따로따로 집어넣고 있는데, js 기능을 헤더 / 바디 / 풋터 따로 하게 된다면 메인 js 파일에 다 import 를 해서 하나하나 끌고온다.
// import { hello } from "./hello.js";
//추상클래스는 앞에 abstract를 붙이면 된다.
class AbstractPerson5 {
    age;
    constructor(age) {
        this.age = age;
    }
}
// class를 활용해서 프로토타입의 객체(붕어빵틀)을 만든다는 것은 인스턴스 객체를 생성하겠다는 의미.
// 그동안 붕어빵틀을 만들고 쓰려면 new 키워드를 쓰면 사용할 수 있었다. 다만 추상클래스는 그 자체만으로는 절대 객체를 인스턴스객체로 만들 수 없기 때문에 다음과 같이 new를 사용해도 추상클래스의 인스턴스를 만들 수 없다고 나온다.
// const person = new AbstractPerson5()
// 반드시 추상클래스를 활용한 별도의 클래스 및 생성자함수를 통해서만 인스턴스 객체를 생성할 수 있다.(중간에 통역작업이 반드시 필요하다는 의미)
class Developer {
    drink() {
        console.log("drink sth");
    }
}
class FrontendDeveloper extends Developer {
    coding() {
        console.log(`develop web`);
    }
    design() {
        console.log(`design web`);
    }
}
const josh = new FrontendDeveloper();
josh.coding();
//# sourceMappingURL=index.js.map