import React, { useState } from "react";
import "./App.css";
import Router from "./Router";
import { createGlobalStyle } from "styled-components";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./Theme";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
  font-family: 'Source Sans 3', sans-serif;
	background: ${(props) => props.theme.bgColor};
	color: ${(props) => props.theme.textColor};
	line-height: 1;
}
a {
  text-decoration: none;
	color: inherit;
}
* {
  box-sizing: border-box;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`;

function App() {
  //dark or light theme를 구분해준다.
  //일단 light를 기본으로 설정, 모든 알고리즘은 항상 basic Default value를 정의하고 시작해야하기 때문.
  //dark theme = false / light theme = true
  // dark light 를 결정짓는 요소는 event로 인해 촉발, event의 trigger 함수를 담고있는 버튼 필요.
  const [isDark, setIsDark] = useState(false);
  //원래 있던 값의 반대로 바꿔주는 일을 한다.(그냥 지금 값을 current로 정의)
  const toggleDark = () => setIsDark((current) => !current);
  return (
    <>
      <ThemeProvider theme={isDark ? DarkTheme : LightTheme}>
        <GlobalStyle />
        <Router isDark={isDark} toggleDark={toggleDark} />
        <ReactQueryDevtools initialIsOpen={true} />
      </ThemeProvider>
    </>
  );
}

export default App;
