import * as React from "react";
import { MemoItem } from "./styles/MemoItem.style";
import { IMemoItem } from "../../../models/memoItem/memoItem";

export default (props: IMemoItem) => {
  const { content, completed } = props;
  return (
    <MemoItem>
      <p>{content}</p>
      <p>{completed ? "done!" : "Not Yet!"}</p>
    </MemoItem>
  );
};
