import { observer } from "mobx-react";
import * as React from "react";
import { IMemoItem, MemoItem } from "../MemoItem";
import { IMemo } from "./models/Memo.model";
import { Memo } from "./styles/Memo.style";

const renderMemoItems = (memo: IMemo) => {
  console.log("filteredMemoItems", memo.filteredMemoItems);
  return memo.filteredMemoItems.map((memoItem: IMemoItem, index: number) => {
    return (
      <div key={index} style={{ margin: "10px" }}>
        <MemoItem
          {...memoItem}
          removeMemoItem={memo.removeMemoItem}
          toggle={memoItem.toggle}
        />
      </div>
    );
  });
};

export default observer((props: { memo: IMemo }) => {
  const { memo } = props;
  const onAddMemoItem = (e: any) => {
    memo.addMemoItem("1");
  };

  const onFilterChanged = (e: any) => {
    memo.changeFilter(e.target.value);
  };
  console.log("?????", memo);
  return (
    <Memo>
      <h3>Memo Title</h3>
      <button onClick={onAddMemoItem}>Add MemoItem</button>
      <select onChange={onFilterChanged} value={memo.filter}>
        <option value="All">All</option>
        <option value="Completed">Completed</option>
        <option value="Incomplete">Incomplete</option>
      </select>
      {renderMemoItems(memo)}
    </Memo>
  );
});
