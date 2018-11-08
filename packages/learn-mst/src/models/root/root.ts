import { MemoItemModel } from "components/molecules/MemoItem";
import { Instance, types } from "mobx-state-tree";
import { UserModel } from "../user";

export const RootStore = types
  .model({
    users: types.map(UserModel),
    memo: types.array(MemoItemModel)
  })
  .actions(self => ({
    addMemoItem(
      user: string,
      content: string = "whattt",
      completed: boolean = false
    ) {
      self.memo.push(MemoItemModel.create({ user, content, completed }));
    }
  }));

export type IRootStore = Instance<typeof RootStore>;
