import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchCoins } from "../Api";
import { Helmet } from "react-helmet";

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
const Button = styled.button`
  border: none;
  margin-left: 20px;
  padding: 10px 20px;
  border-radius: 30px;
  margin-top: -10px;
  background: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  cursor: pointer;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background: ${(props) => props.theme.cardBgColor};
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.accentColor};
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

interface ICoinProps {
  toggleDark: () => void;
}

const Coins = ({ toggleDark }: ICoinProps) => {
  // allcoin이라고 정의할게.
  const { isLoading, data } = useQuery<CoinInterface[] | undefined>(
    "allCoins",
    fetchCoins
  );
  console.log(isLoading, data);
  // //coin 데이터를 가져왔을 때 뿌려주는 일을 한다
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // //데이터를 가져온건지 가져오고있는건지 상태관리하는 일
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "https://my-json-server.typicode.com/Divjason/coinlist/coins"
  //     );
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100));
  //     console.log(json.slice(0, 100));
  //     setLoading(false);
  //   })();
  // }, []);
  return (
    <Container>
      <Helmet>
        <Title>Coin List</Title>
      </Helmet>
      <Header>
        <Title>Virtual Money - CoinList</Title>
        <Button onClick={toggleDark}>Toggle Mode</Button>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {data?.map((coin) => (
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
