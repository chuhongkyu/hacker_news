import React from "react";
import styled from "styled-components";
import Banner from "./Banner";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Wrapper>
      <Banner
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quia aliquam, eos ratione aperiam eius eum laborum enim, ullam iste aut. Excepturi sed exercitationem culpa ab, modi deserunt cum. Nisi."
        }
      />
    </Wrapper>
  );
}

export default App;
