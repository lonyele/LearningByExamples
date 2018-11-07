import { observer } from "mobx-react";
import * as React from "react";
import { IMemoItem, MemoItem } from "../MemoItem";
import { Memo } from "./styles/Memo.style";

const renderMemoItems = (memo: IMemoItem[]) => {
  return memo.map((memoItem: IMemoItem, index: number) => {
    return <MemoItem key={index} {...memoItem} />;
  });
};

export default observer(
  (props: { memo: IMemoItem[]; addMemoItem: () => void }) => {
    const { memo, addMemoItem } = props;
    const onAddMemoItem = (e: any) => {
      console.log("add MemoItem??", addMemoItem);
      addMemoItem();
    };
    return (
      <Memo>
        <h3>Memo Title</h3>
        <button onClick={onAddMemoItem}>Add MemoItem</button>
        {renderMemoItems(memo)}
      </Memo>
    );
  }
);
