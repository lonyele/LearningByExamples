import { MemoItemModel } from "components/molecules/MemoItem";
import { types } from "mobx-state-tree";

export const RootStore = types
  .model({
    memo: types.array(MemoItemModel)
  })
  .actions(self => ({
    addMemoItem(content: string = "whattt", completed: boolean = false) {
      self.memo.push(MemoItemModel.create({ content, completed }));
    }
  }));
