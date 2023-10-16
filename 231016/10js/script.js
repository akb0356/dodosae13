let num = 0;
function testFnc() {
  num++;
  document.write(num, "<br/>");
  // 리턴문에 반환값이 없으면 종결을 의미
  if (num == 10) return;
  testFnc();
}
testFnc();
