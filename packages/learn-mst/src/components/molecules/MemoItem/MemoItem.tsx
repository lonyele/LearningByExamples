import * as React from "react";
import { IMemoItem } from "./models/MemoItem.model";
import { MemoItem } from "./styles/MemoItem.style";

export default (props: IMemoItem) => {
  const { content, completed } = props;
  return (
    <MemoItem>
      <p>{content}</p>
      <p>{completed ? "done!" : "Not Yet!"}</p>
    </MemoItem>
  );
};
