// 웹브라우저는 html css js 3가지 언어만 읽고 실행한다. => js 프로그래밍 언어를 웹브라우저에서만 사용하지 않고, 웹브라우저가 아닌 다른곳에도 사용할 수 있도록 하기 위해서 태어난 js 런타임(*실행환경) => node js => ts/react

//fs라는 것은 Node의 모듈중 하나이다, fs = filesystem의 약어
//사용자가 웹페이지에서 특정 버튼을 클릭하면 로컬컴퓨터의 파일저장공간에 폴더가 생성, 입력한 특정데이터를 로컬스토리지 저장, fetch() => 변수를 전역요소!
// 서버 = 사용자가 입력한 값 => 지역변수
import { readFileSync, readFile } from "fs";
console.log("read package.json using synchronous api ...");
//buffer라는 interface type
const buffer: Buffer = readFileSync("./package.json");
//buffer라는 공간에 들어온 json 파일을 문자열로 출력하려면 반드시 tostring()을 실행해야한다.
console.log(buffer.toString());

//비동기처리방식으로 package json 파일을 가져오는 방법

const readFilePromise = (filename: string): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    readFile(filename, (error: Error, buffer: Buffer) => {
      if (error) {
        reject(error);
      } else {
        resolve(buffer.toString());
      }
    });
  });
};

(async () => {
  const content = await readFilePromise(`./package.json`);
  console.log("read package.json using Promise and async/await...");
  console.log(content);
});
