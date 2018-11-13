import { Instance, types } from "mobx-state-tree";

export const Oval = types.model({
  type: "Oval",
  ovalContents: types.string
});

export type IOval = Instance<typeof Oval>;
