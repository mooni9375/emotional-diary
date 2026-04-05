import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/Notfound";
import Header from "./components/Header.jsx";
import Button from "./components/Button.jsx";

import { getEmotionImage } from "./util/get-emotion-image";

// 1. "/" : 모든 일기를 조회하는 Home Page
// 2. "/new" : 새로운 일기를 작성하는 New Page
// 3. "/diary" : 일기를 상세히 조회하는 Diary Page
function App() {
  const nav = useNavigate();

  return (
    <>
      <Header
        title={"Tmp_Title"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"Right"} />}
      />
      <Button
        text="Test Button"
        onClick={() => {
          console.log("Test Button Clicked...");
        }}
      />
      <Button
        text="Test Button"
        type={"POSITIVE"}
        onClick={() => {
          console.log("Test Button Clicked...");
        }}
      />
      <Button
        text="Test Button"
        type={"NEGATIVE"}
        onClick={() => {
          console.log("Test Button Clicked...");
        }}
      />
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
