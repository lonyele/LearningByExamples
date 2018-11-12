import { Instance, types } from "mobx-state-tree";

export const Oval = types.model({
  type: "Oval"
});

export type IOval = Instance<typeof Oval>;
