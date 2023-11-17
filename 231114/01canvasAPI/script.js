const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//원점의 위치를 옮기는 메서드 = translate()

ctx.fillStyle = "#ccc";
//메서드
ctx.fillRect(10, 10, 100, 100);
//나중에 restore로 복구할 때 다시 돌아갈 지점에서 save를 한다.
ctx.save();

//그리고 이 x y축 지점에서 다시 시작할게, 원점을 재정의하고싶을 때 사용한다.
ctx.translate(150, 150);
ctx.fillStyle = "#222";
//150 150 현 위치로부터 10, 10 떨어진 지점에 100 100의 사각형을 만들고 싶어.
ctx.fillRect(10, 10, 100, 100);
//이 친구는 translate를 사용하지 않아서 150, 150 설정한 기준으로 생성이 되는 것이다. 그로부터 50, 50 떨어진 위치에 생성된 것.
ctx.fillStyle = "#f00";
ctx.fillRect(50, 50, 80, 20);

// 위의 150 150으로 원점값을 변경하기 전으로 돌아가고 싶을 때 restore를 쓰면 translate를 쓰기 전으로 돌아갈 수 있다.
ctx.restore();
