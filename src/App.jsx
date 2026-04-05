import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";

import emotion1 from "./assets/emotion1.png";
import emotion2 from "./assets/emotion2.png";
import emotion3 from "./assets/emotion3.png";
import emotion4 from "./assets/emotion4.png";
import emotion5 from "./assets/emotion5.png";

// 1. "/" : 모든 일기를 조회하는 Home Page
// 2. "/new" : 새로운 일기를 작성하는 New Page
// 3. "/diary" : 일기를 상세히 조회하는 Diary Page
function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      {/* public 디렉토리에서 아래와 같이 불러오면 캐싱이 되지 않음 - 최적화에 불리 */}
      {/*<div>*/}
      {/*  <img src={"/emotion1.png"} alt="emotion1" />*/}
      {/*  <img src={"/emotion2.png"} alt="emotion1" />*/}
      {/*  <img src={"/emotion3.png"} alt="emotion1" />*/}
      {/*  <img src={"/emotion4.png"} alt="emotion1" />*/}
      {/*  <img src={"/emotion5.png"} alt="emotion1" />*/}
      {/*</div>*/}
      {/* 캐싱 가능하여 최적화에 유리 - 이미지가 많은 경우 캐싱시 스토리지 이슈 발생 가능하니 유의 */}
      <div>
        <img src={emotion1} />
        <img src={emotion2} />
        <img src={emotion3} />
        <img src={emotion4} />
        <img src={emotion5} />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button onClick={onClickButton}>New 페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
