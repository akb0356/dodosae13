import { range } from "./range";

let numbers: number[] = range(1, 10);
console.log(numbers);

// for in / of문 : 명령형 프로그래밍 방법
// 장점 : 매우 습득하기 빠르다. 학습이 효율적
// 단점 : 해당 코드를 실행되지 않는다 => 이유를 하나에 열까지 다 테스트 및 실험
// 이러한 명령형 프로그래밍을 (*로우레벨 프로그래밍 방식)
// 고품질 하이 레벨 방식으로 프로그래밍을 하려면 => 선언형 프로그래밍 방식
// 초심자들에게는 어려운 방식 / 하지만 익숙해지면 굉장히 효율적이고, 버그를 찾을 때 말도안될정도의 효율성을 챙긴다.
// 선언형 방식으로 코드 짜는 방법을 배우면 1부터 10까지 쪼개서 돌리기 때문에 이해도가 높아진다. (*고난이도지만 추천~)
