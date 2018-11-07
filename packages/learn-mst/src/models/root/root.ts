import { types } from "mobx-state-tree";
import { MemoItem } from "../memoItem";

export const RootStore = types
  .model({
    memo: types.array(MemoItem)
  })
  .actions(self => ({
    addMemoItem(content: string = "whattt", completed: boolean = false) {
      self.memo.push(MemoItem.create({ content, completed }));
    }
  }));
