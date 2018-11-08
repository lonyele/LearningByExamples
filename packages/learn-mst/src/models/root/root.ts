import * as cuid from "cuid";
import { Instance, types } from "mobx-state-tree";

import { IMemoItem, MemoItemModel } from "components/molecules/MemoItem";
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
      self.memo.push(
        MemoItemModel.create({ id: cuid(), user, content, completed })
      );
    },

    removeMemoItem(id: string) {
      self.memo.replace(
        self.memo.filter((memoItem: IMemoItem) => memoItem.id !== id)
      );
    }
  }));

export type IRootStore = Instance<typeof RootStore>;
