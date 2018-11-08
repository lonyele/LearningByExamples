import * as cuid from "cuid";
import { Instance, types } from "mobx-state-tree";
import { User } from "src/models/user/user";
import { IMemoItem, MemoItemModel } from "../../MemoItem";
export enum Filter {
  All = "All",
  Completed = "Completed",
  Incomplete = "Incomplete"
}
const MEMO_FILTERS = {
  All: () => true,
  Completed: (memoItem: IMemoItem) => memoItem.completed,
  Incomplete: (memoItem: IMemoItem) => !memoItem.completed
};

// MemoItemStore
export const Memo = types
  .model({
    id: types.string,
    user: types.reference(User),
    memoItems: types.array(MemoItemModel),
    filter: types.enumeration("Filter", ["All", "Completed", "Incomplete"])
  })
  .views(self => ({
    get filteredMemoItems() {
      return self.memoItems.filter(MEMO_FILTERS[self.filter]);
    }
  }))
  .actions(self => ({
    addMemoItem(
      user: string,
      content: string = "whattt",
      completed: boolean = false
    ) {
      self.memoItems.push(
        MemoItemModel.create({ id: cuid(), user, content, completed })
      );
    },

    removeMemoItem(id: string) {
      self.memoItems.replace(
        self.memoItems.filter((memoItem: IMemoItem) => memoItem.id !== id)
      );
    },

    changeFilter(filter: Filter) {
      self.filter = filter;
    }
  }));

export type IMemo = Instance<typeof Memo>;
