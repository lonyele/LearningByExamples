import { Instance, types } from "mobx-state-tree";

export const User = types.model({
  id: types.identifier,
  name: types.string
});

export type IUser = Instance<typeof User>;
