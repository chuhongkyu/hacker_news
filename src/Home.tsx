import { useEffect } from "react";
import styled from "styled-components";

export interface INews {
  comments_count: number;
  domain: string;
  id: number;
  points: number;
  time: number;
  time_ago: string;
  title: string;
  type: string;
  url: string;
  user: string;
}

const Item = styled.div`
  padding: 5px 10px;
  border: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  &:hover {
    transform: translateY(-5px);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Home = () => {
  const ajax = new XMLHttpRequest();
  const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
  const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";
  ajax.open("GET", NEWS_URL, false);
  ajax.send();
  const onHashChange = () => {
    window.addEventListener("hashchange", () => {
      ajax.open("GET", CONTENT_URL, false);
      console.log(window.location.hash);
    });
  };

  const newsFeed = JSON.parse(ajax.response);
  console.log(newsFeed);
  return (
    <>
      {newsFeed.map((m: INews) => (
        <Item key={m.id} onClick={onHashChange}>
          <a href={`#${m.id}`}>
            <h1>{m.title}</h1>
            <p>댓글 : {m.comments_count}</p>
          </a>
        </Item>
      ))}
    </>
  );
};

export default Home;
