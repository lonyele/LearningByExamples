import { observer } from "mobx-react";
import * as React from "react";
import { IMemoItem, MemoItem } from "../MemoItem";
import { Memo } from "./styles/Memo.style";

const renderMemoItems = (
  memo: IMemoItem[],
  removeMemoItem: (id: string) => void
) => {
  return memo.map((memoItem: IMemoItem, index: number) => {
    console.log("memoIte4m", memoItem);
    return (
      <div key={index} style={{ margin: "10px" }}>
        <MemoItem
          {...memoItem}
          removeMemoItem={removeMemoItem}
          toggle={memoItem.toggle}
        />
      </div>
    );
  });
};

export default observer(
  (props: {
    memo: IMemoItem[];
    addMemoItem: (userId: string) => void;
    removeMemoItem: (id: string) => void;
  }) => {
    const { memo, addMemoItem, removeMemoItem } = props;
    const onAddMemoItem = (e: any) => {
      console.log("add MemoItem??", addMemoItem);
      addMemoItem("1");
    };
    return (
      <Memo>
        <h3>Memo Title</h3>
        <button onClick={onAddMemoItem}>Add MemoItem</button>
        {renderMemoItems(memo, removeMemoItem)}
      </Memo>
    );
  }
);
