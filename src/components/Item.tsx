import styled from "styled-components";
import { INews } from "../Home";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function Item({ title, domain }: INews) {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <p>{domain}</p>
    </Wrapper>
  );
}

export default Item;
