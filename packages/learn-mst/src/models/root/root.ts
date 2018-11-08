// import * as cuid from "cuid";
import { Instance, types } from "mobx-state-tree";

// import {  MemoItemModel } from "components/molecules/MemoItem";
import { MemoModel } from "src/components/molecules/Memo";
import { UserModel } from "../user";

export const RootStore = types.model({
  users: types.map(UserModel),
  memos: types.map(MemoModel)
});

export type IRootStore = Instance<typeof RootStore>;
