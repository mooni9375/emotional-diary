import Header from "../components/Header";
import Button from "../components/Button.jsx";
import DiaryList from "../components/DiaryList.jsx";

const Home = () => {
  return (
    <div>
      <Header
        title={"2026년 5월"}
        leftChild={<Button text={"<"} />}
        rightChild={<Button text={">"} />}
      />
      <DiaryList />
    </div>
  );
};

export default Home;
