import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 40px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  padding: 20px;
  max-width: 880px;
  margin: 0 auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background: #fff;
  color: ${(props) => props.theme.textColor};
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 15px;
  font-size: 20px;
  a {
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.textColor};
    padding: 20px;
    transition: 0.2s color ease-in;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  display: block;
  text-align: center;
  font-size: 24px;
`;

const Img = styled.img`
  witdh: 30px;
  height: 30px;
  margin-right: 20px;
`;

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  //coin 데이터를 가져왔을 때 뿌려주는 일을 한다
  const [coins, setCoins] = useState<CoinInterface[]>([]);
  //데이터를 가져온건지 가져오고있는건지 상태관리하는 일
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://my-json-server.typicode.com/Divjason/coinlist/coins"
      );
      const json = await response.json();
      setCoins(json.slice(0, 100));
      console.log(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Virtual Money - CoinList</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                />
                Coin Ranking: {coin.rank}. {coin.name} &rarr; [Click] Detail
                Coin info{""}
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
