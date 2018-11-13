import { Instance, types } from "mobx-state-tree";

export const Text = types
  .model({
    type: "Text",
    textContents: types.string
  })
  .actions(self => ({}));

export type IText = Instance<typeof Text>;
