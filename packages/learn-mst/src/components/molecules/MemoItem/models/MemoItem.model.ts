import { Instance, types } from "mobx-state-tree";
import { User } from "src/models/user/user";

export const MemoItem = types.model({
  id: types.string,
  user: types.reference(User),
  content: types.string,
  completed: types.boolean
});
// .actions(self => ({
//   setContent(newContent: string) {
//     self.content = newContent;
//   },

//   toggle() {
//     self.completed = !self.completed;
//   }
// }));

export type IMemoItem = Instance<typeof MemoItem>;
