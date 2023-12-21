// init이라는 모듈을 끌고와서 쓰겠습니다.
import { init } from "./init";
//반드시 어떤 함수를 받게끔 되어있음. 함수를 인자값으로 안받아서 실행 못한다 경고문
init(() => console.log("custom initialization finished."));
