import * as React from "react";
import { IMemoItem } from "./models/MemoItem.model";
import { Footer } from "./styles/Footer.style";
import { MemoItem } from "./styles/MemoItem.style";
interface IWhat extends IMemoItem {
  removeMemoItem: (id: string) => void;
}

export default (props: IWhat) => {
  const { id, content, completed, user, removeMemoItem } = props;
  const onRemoveMemoItem = () => {
    removeMemoItem(id);
  };
  return (
    <MemoItem>
      <div>{user.name}</div>
      <div>{content}</div>
      <div>{completed ? "done!" : "Not Yet!"}</div>
      <Footer>
        <button onClick={onRemoveMemoItem}>Remove</button>
      </Footer>
    </MemoItem>
  );
};
