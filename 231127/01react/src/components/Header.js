function Header() {
  //컴포넌트에서 return문은 항시 ()로
  return (
    <header>
      <h1>header</h1>
    </header>
  );
}

//통상적으로 하나의 컴포넌트에는 하나의 스크립트를 넣어둠.
//이 파일에서 이 header 하나만 가져올거라면 이렇게 써도 괜찮다.
export default Header