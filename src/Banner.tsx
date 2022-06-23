import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10vh;
  background-color: black;
  display: flex;
  align-items: center;
  overflow-x: hidden;
`;

const scrollAnim = keyframes`
0%{
    transform: translateX(1000px)
}
100%{
    transform: translateX(-1000px)
}
`;

const ScrollText = styled.span`
  color: yellowgreen;
  animation: ${scrollAnim} 12s linear infinite;
  transition: 0.5s;
  white-space: nowrap;
`;

interface Iprops {
  text: string;
}

const Banner = (prop: Iprops) => {
  return (
    <Container>
      <ScrollText>
        <p>{prop.text}</p>
      </ScrollText>
    </Container>
  );
};

export default Banner;
