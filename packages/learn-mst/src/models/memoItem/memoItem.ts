import { types, Instance } from "mobx-state-tree";

export const MemoItem = types.model({
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
