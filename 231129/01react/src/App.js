import "./App.css";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

function App() {
  //홑태그(*싱글태그) :: 여는 태그에 닫는 태그까지 같이 입력한 경우
  //쌍태그(*멀티태그):: 우리가 아는 그거
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
