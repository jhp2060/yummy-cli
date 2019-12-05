import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Nav from "../components/Organisms/ReviewNav";
import ReviewGraph from "../components/Organisms/ReviewGraph";
import RedBox from "../components/Organisms/RedBox";
import Reviews from "../components/Templates/Reviews";
import Link from "next/link";
import { useQuery } from "../lib";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

function App(p) {
  const router = useRouter();

  const apiUrl = process.env.API_HOST + `/dish/${router.query.id}/`;

  const data = useQuery(apiUrl);

  useEffect(() => {
    console.log(res.data);
  }, [data]);
  return (
    <div
      className="App"
      style={{
        display: "flex",
        overflowY: "hidden",
        width: "100%",
        height: "100%"
      }}
    >
      <Wrapper>
        <RedBox />
        <ReviewGraph
          pt5_cont={data.pt5_cnt}
          pt4_cont={data.pt4_cnt}
          pt3_cont={data.pt3_cnt}
          pt2_cont={data.pt2_cnt}
          pt1_cont={data.pt1_cnt}
        />
        <Reviews />
        <Link href={`/ReviewWrite?id=${router.query.id}`}>
          <a style={{ textDecoration: "none" }}>
            <Nav position={{ position: "absolute", bottom: 0 }} />
          </a>
        </Link>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export default App;
