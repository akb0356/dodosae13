import "./App.css";
import Box from "./Box";
import { useState } from "react";

const choice = {
  Scissors: {
    name: "Scissors",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },
  Rock: {
    name: "Rock",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png",
  },
  Paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/bmjB2s/btqXHhp6kpG/TH14W4U612SxKo9uuR2sB0/img.png",
  },
};

function App() {
  const [userselect, setUserSelect] = useState({});
  const [result, setResult] = useState("");
  //컴퓨터의 값이 들어가야하는곳
  const [computerSelect, setComputerSelect] = useState({});
  const randomChoice = () => {
    let itemArr = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArr.length);
    let final = itemArr[randomItem];
    console.log(final);
    return choice[final];
  };
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    judgement(choice[userChoice], computerChoice);
  };
  const judgement = (user, computer) => {
    console.log(user, computer);
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock") {
      return computer.nam == "Scissors" ? "Win" : "Lose";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "Win" : "Lose";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "Win" : "Lose";
    }
  };

  return (
    <div className="App">
      <div className="main">
        <Box item={userselect} result={result} title="You" />
        <Box title="Computer" result={result} item={computerSelect} />
      </div>
      <div className="main">
        <button onClick={() => play("Scissors")}>가위</button>
        <button onClick={() => play("Rock")}>바위</button>
        <button onClick={() => play("Paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
