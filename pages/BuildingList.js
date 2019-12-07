import React, { useState, useEffect } from "react";
import MainTopDialog from "../components/Templates/MainTopDialog";
import TopButton from "../components/Organisms/TopButton";
import BuildingDialog from "../components/Templates/BuildingDialog";
import styled from "styled-components";

// import FacebookLogin from "react-facebook-login";
// import HomeBottomNav from "../components/templates/HomeBottomNav";

const TIME_PERIOD = [930, 1430, 2000];

function App() {
  const [month, setMonth] = useState(new Date().getMonth() + 1);
  const [day, setDay] = useState(new Date().getDate());
  const [textIndex, setTextIndex] = useState(0);
  const getCurrentTimePeriod = () => {
    const nowTime = new Date();
    const hour = nowTime.getHours();
    const minute = nowTime.getMinutes();

    for (let i = 0; i < 3; ++i) {
      if (hour * 100 + minute < TIME_PERIOD[i]) {
        return i;
      }
    }
    return 0;
  };

  const getMonthDay = () => {
    const nowTime = new Date();
    setMonth(nowTime.getMonth() + 1);
    setDay(nowTime.getDate());
  };
  const [timePeriod, setTimePeriod] = useState(getCurrentTimePeriod());

  // useEffect(() => {
  //   getMonthDay();
  // }, []);
  useEffect(() => {
    setTextIndex(day % 13);
  }, [day]);
  useEffect(() => {
    console.log(month, day);
  }, [month, day]);
  return (
    <>
      <div
        className="App"
        style={{
          display: "flex",
          overflowY: "hidden",
          width: "100%",
          height: "100%"
        }}
      >
        {/* <FacebookLogin
        appId="1425008167650893"
        autoLoad={true}
        fields="name,email,picture"
        callback={response => {
          console.log(response);
        }}
      /> */}
        <Wrapper>
          <TopButton />
          <MainTopDialog
            month={month}
            day={day}
            timePeriod={timePeriod}
            textIndex={textIndex}
            setTimePeriod={tp => setTimePeriod(tp)}
            setDay={day => setDay(day)}
          />
          <BuildingDialog month={month} day={day} timePeriod={timePeriod} />
        </Wrapper>
      </div>
    </>
  );
}
// const Background = styled.header`
//   text-align: center;
// `;

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export default App;