import { createRangeIterable, RangeIteravle } from "./index03";

const iterable = new RangeIteravle(1, 4)
for (let value of iterable) console.log(value);



// js이터러블 객체 / 이터레이터 객체 / 제너레이터 함수 / next()
// ts 클래스 생성자 => 이터러블한 객체 생성
// for of 반복문 사용!
// range 함수값을 반복하는 것 vs 이터러블 객체를 생성해서 값을 반복하는것
// 리엑트가 대표적인 선언형 프로그래밍 프레임워크 