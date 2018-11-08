import * as React from "react";
import { IMemoItem } from "./models/MemoItem.model";
import { Footer } from "./styles/Footer.style";
import { MemoItem } from "./styles/MemoItem.style";
interface IWhattt extends IMemoItem {
  removeMemoItem: (id: string) => void;
}

export default (props: IWhattt) => {
  const { id, content, completed, user, removeMemoItem, toggle } = props;
  const onRemoveMemoItem = () => {
    removeMemoItem(id);
  };

  const onToggle = () => {
    toggle();
  };
  return (
    <MemoItem>
      <div>{user.name}</div>
      <div>{content}</div>
      <Footer>
        <input type="checkbox" checked={completed} onChange={onToggle} />
        <button onClick={onRemoveMemoItem}>Remove</button>
      </Footer>
    </MemoItem>
  );
};
