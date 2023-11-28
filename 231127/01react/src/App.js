import "./App.css";
//어짜피 헤더 하나만 끌고올거니깐 {}을 쓰지 않아도 괜찮다.
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//생김새는 함수인데 첫 단어가 대문자로 시작한다면, component 이다.
// app 함수가 아닌 component이다.
// 그러면 시작하는 첫 단어를 소문자로 하면 안되나요?
// 됩니다, 하지만 일반함수 vs 컴포넌트 둘이 혼동이 올 수 있다.

//Jsx문법(*Java Script & xml)
// svg를 쓸 때 누가 만들었는지 출처를 항상 써야했는데, 그 출처가 바로 xmlns => xml name space: 해당 xml문법을 창시한 창시자, 혹은 기업을 기리기위한 약속!
//xml => extensible markup language => 개발자가 자신만의 고유한 문법을 만들어서 사용하고 싶을 때
//<desk>라는 태그도 만들어서 쓸 수 있음. (단 오직 xml문법에서만 쓸 수 있음.)
// html => 시멘틱, h1, nav, div 등 의미
function App() {
  const name = "David";
  const location = '강남구'
  return (
    <div className="App">
      <Header />
      <Body name={name} location={location}/>
      <Footer />
    </div>
  );
}

export default App;
