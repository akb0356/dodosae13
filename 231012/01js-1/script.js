// 객체 안에 value 값으로 함수(function)을 넣을 때 = > 메서드(method) : 함수형태 종류

// 객체 & 메서드 :: 재활용이 가능한 객체 및 메서드.
let test = {
  avg: function (math, science) {
    return math + science;
  },
};

document.write(test.avg(50, 100));

// 재활용이 불가한 객체&메서드(고정)
// 치명적 단점 :: 객체명을 변경하면 내용이 안먹음!
let test01 = {
  math: 50,
  science: 100,
  avg: function () {
    return test01.math + test01.science;
  },
};
// 그래서 다음과 같이 수정했습니다. this를 사용하면 내가 있는 객체의 이름을 온전히 따라가기 때문에 수식 일부재활용이 가능해집니다.
let test01 = {
  math: 50,
  science: 100,
  avg: function () {
    return this.math + this.science;
  },
};
// avg()<= 괄호 안에 들어가는 변수에 매칭되어지는 값을 인자값, 인수라고 한다.
document.write(test01.avg());

// 우리가 늘 쓰는 이 내용들, 모두 js안에 들어있는 내장 객체!
// document는 객체 write는 메서드인것임!
// document.write()
// console.log()
