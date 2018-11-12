import { Instance, types } from "mobx-state-tree";

export const Oval = types.model({
  type: "Oval",
  x: types.integer,
  y: types.integer,
  width: types.integer,
  height: types.integer
});

export type IOval = Instance<typeof Oval>;
