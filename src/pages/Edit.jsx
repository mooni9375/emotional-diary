import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App.jsx";

import Header from "../components/Header.jsx";
import Button from "../components/Button.jsx";
import Editor from "../components/Editor.jsx";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  const { onDelete } = useContext(DiaryDispatchContext);

  const onClickDelete = () => {
    if (window.confirm("정말 삭제할까요?")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            onClick={() => nav("/", { replace: true })}
            text={"< 뒤로 가기"}
          />
        }
        rightChild={
          <Button onClick={onClickDelete} text={"삭제하기"} type={"NEGATIVE"} />
        }
      />
      <Editor />
    </div>
  );
};

export default Edit;
