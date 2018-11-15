import * as cuid from "cuid";
import { Instance, types } from "mobx-state-tree";

// import {  MemoItemModel } from "components/molecules/MemoItem";
import { MemoModel } from "src/components/molecules/Memo";
import { Test } from "src/components/molecules/TestComplexType/Test.model";
import { UserModel } from "../user";

export const RootStore = types
  .model({
    users: types.map(UserModel),
    memos: types.map(MemoModel),
    tests: types.array(Test)
  })
  .actions(self => ({
    addTest(type: string) {
      self.tests.push({
        id: cuid(),
        content: "new~~~~",
        completed: false,
        optional: "Asfa",
        whattheHeck: {
          type,
          content: "whhhhhhhhhhhhat",
          oneSpecificContent: " asdf",
          twoSpecific: "1111111"
        },
        changeContent: () => console.log("what the???"),
        whatthe: () => console.log("asdf")
      });
      console.log("last one", self.tests[self.tests.length - 1].whattheHeck);
    }
  }));

export type IRootStore = Instance<typeof RootStore>;
