import * as React from "react";
import { IMemoItem } from "./models/MemoItem.model";
import { MemoItem } from "./styles/MemoItem.style";

export default (props: IMemoItem) => {
  const { content, completed, user } = props;
  return (
    <MemoItem>
      <div>{user.name}</div>
      <div>{content}</div>
      <div>{completed ? "done!" : "Not Yet!"}</div>
    </MemoItem>
  );
};
