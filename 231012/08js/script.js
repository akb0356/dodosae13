// 문자열 객체

let t = "Hello Thank you good luck to you";
document.write(t, "<br/>");

// 16번째 문자가 무엇이 들어가있는가.
document.write(t.charAt(16), "<br/>");

// you가 문장에서 몇번째에 들어가있는가. :
document.write(t.indexOf("you"), "<br/>");

// 16번째 문자 뒤로(g) you가 어디서 시작하니 : 29번째에서 시작해~
document.write(t.indexOf("you", 16), "<br/>");

// 뒤에서부터 you가 몇번째에서 시작하니 : 29번째에서 시작해~
document.write(t.lastIndexOf("you"), "<br/>");

// 뭐임?
document.write(t.lastIndexOf("you", 25), "<br/>");

// match값 안에 들어있는 단어와 동일한거 찾아줘.
document.write(t.match("luck"), "<br/>");

// luck 찾아줘, 근데 몇번째 인덱스부터 시작하는지 찾아줘 : 21번째야
document.write(t.search("luck"), "<br/>");

// 21번째 인덱스부터(luck) 4개 아이템 찾아줘 : 그건 바로 luck이얌
document.write(t.substr(21, 4), "<br/>");

// 인덱스 6번(t)부터 12번(k)까지 찾아와줘 : thank
document.write(t.substring(6, 12), "<br/>");

// 해당 문자열에서 가장 먼저 오는걸 바꿔준다.
document.write(t.replace("you", "me"), "<br/>");

// 소문자로 변경
document.write(t.toLowerCase(), "<br/>");

// 대문자로변경
document.write(t.toUpperCase(), "<br/>");

// 이거 총 몇글자니? : 32자야~
document.write(t.length, "<br/>");

// t를 문자 하나하나 띄어쓰기 중심으로 쪼개서 배열형태로 s안에 넣어주세요.
let s = t.split(" ");
document.write(s[0], "<br/>");
document.write(s[4], "<br/>");

// 아스키코드값 :: 뭐라는지 모르겠음. // 특정 아스키코드값 못쓰게 하고 싶을 때 사용한다네요.
let str = "A";
let k = str.charCodeAt(0);
document.write(k);
