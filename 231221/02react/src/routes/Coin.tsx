import React, { useState, useEffect } from "react";
import {
  useParams,
  useLocation,
  Routes,
  Route,
  Link,
  useMatch,
} from "react-router-dom";
import styled from "styled-components";
import Chart from "./Chart";
import Price from "./Price";

interface RouteParams {
  coinId: string;
}

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

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 40px;
  margin-bottom: 20px;
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  display: block;
  text-align: center;
  font-size: 24px;
`;

const OverView = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.accentColor};
  border-radius: 5px;
`;
const OverViewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  span:first-child {
    font-size: 23px;
    font-weight: 800;
    text-transform: uppercase;
  }
  span:last-child {
    color: ${(props) => props.theme.bgColor};
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;
const Description = styled.p`
  margin: 20px 0;
  text-align: center;
  color: ${(props) => props.theme.accentColor};
  background: ${(props) => props.theme.textColor};
  padding: 30px 20px;
  boder-radius: 10px;
  font-size: 24px;
  font-weight: 800;
  text-transform: uppercase;
  border-radius: 5px;
`;

interface LocationState {
  state: string;
}

interface infoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

interface priceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

const Coin = () => {
  const { coinId } = useParams<RouteParams | any>();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState<infoData>();
  const [priceInfo, setPriceInfo] = useState<priceData>();
  //부모요소로부터 받아온 state에 대한 타입을 location으로 해주고 싶었고(찾아왔지만 타입정의를 할 수 없었기 때문에 타입 정의를 해주고자 as사용) location은 as로 타입단언을 해준다.
  //state와 동일한 값을 찾아오기 위해서 구조분해할당하려고 {} 안에 넣은거예요
  const { state } = useLocation() as LocationState;
  const priceMatch = useMatch("/:coinId/price");
  const chartMatch = useMatch("/:coinId/chart");
  console.log(priceMatch);

  //지금은 부모의 데이터를 거쳐서 왔기 때문에 데이터를 가져오는데 새 탭에서 coin 창주소를 입력하면 다이렉트로 온거라 자료를 끌고오지 못한다. 이를 해결하기위해...
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinlist/coins/${coinId}`
        )
      ).json();
      const priceData = await (
        await fetch(
          `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
        )
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>Coin Name {state || "Loading..."}</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <OverView>
            <OverViewItem>
              <span>Rank</span>
              <span>{info?.rank}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Symbol</span>
              <span>{info?.symbol}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Type</span>
              <span>{info?.type}</span>
            </OverViewItem>
          </OverView>
          <Description>{priceInfo?.id}</Description>
          <OverView>
            <OverViewItem>
              <span>Total Supply</span>
              <span>{priceInfo?.total_supply}</span>
            </OverViewItem>
            <OverViewItem>
              <span>Max Supply</span>
              <span>{priceInfo?.max_supply}</span>
            </OverViewItem>
          </OverView>
          {/* 별도의 페이지로 가지 않고 하단에 페이지가 렌더링되게 하려고 Routes를 넣은것 */}
          <Link to={`/${coinId}/chart`}>Chart</Link>
          <Link to={`/${coinId}/price`}>Price</Link>
          <Routes>
            <Route path="chart" element={<Chart />} />
            <Route path="price" element={<Price />} />
          </Routes>
        </>
      )}
    </Container>
  );
};

export default Coin;
