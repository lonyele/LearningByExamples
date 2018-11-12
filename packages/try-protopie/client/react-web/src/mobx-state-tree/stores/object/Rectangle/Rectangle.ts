import { Instance, types } from "mobx-state-tree";

export const Rectangle = types.model({
  type: "Rectangle",
  x: types.integer,
  y: types.integer,
  width: types.integer,
  height: types.integer
});

export type IRectangle = Instance<typeof Rectangle>;
