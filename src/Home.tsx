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

const Home = () => {
  const ajax = new XMLHttpRequest();
  ajax.open("GET", "https://api.hnpwa.com/v0/news/1.json", false);
  //메소드 방법, url, boolean false 동기적으로 가져오겠다
  ajax.send();
  const newsFeed = JSON.parse(ajax.response);
  console.log(newsFeed);
  return (
    <>
      {newsFeed.map((m: INews) => (
        <h1>{m.title}</h1>
      ))}
    </>
  );
};

export default Home;
