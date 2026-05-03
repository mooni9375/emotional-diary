import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button.jsx";
import Viewer from "../components/Viewer.jsx";

const Diary = () => {
  const params = useParams();
  const nav = useNavigate();

  return (
    <div>
      <Header
        title={"yyyy-mm-dd 기록"}
        leftChild={
          <Button
            text={"< 뒤로 가기"}
            onClick={() => {
              nav(-1);
            }}
          />
        }
        rightChild={<Button text={"수정하기"} onClick={() => {}} />}
      />
      <Viewer />
    </div>
  );
};

export default Diary;
