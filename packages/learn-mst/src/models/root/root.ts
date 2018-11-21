import * as cuid from "cuid";
import { Instance, types } from "mobx-state-tree";

import { MemoModel } from "src/components/molecules/Memo";
import {
  IOne,
  ITwo,
  One,
  Two
} from "src/components/molecules/TestComplexType/Test.model";
import { UserModel } from "../user";

export const RootStore = types
  .model({
    users: types.map(UserModel),
    memos: types.map(MemoModel),
    tests: types.array(
      types.union(
        // {
        //   eager: false
        // },
        Two,
        One
      )
    )
  })
  .actions(self => ({
    addTest(type: string, initValues?: IOne | ITwo) {
      self.tests.push(switchTable[type](type, initValues));
      console.log("last one", self.tests[self.tests.length - 1]);
    },
    addOne(
      defaultValues: IOne = {
        id: cuid(),
        type: "One",
        content: "base one",
        name: "base one",
        optional: "base one",
        oneSpecific: "base one",
        changeContent: () => void 0,
        oneBaseActions: () => void 0
      }
    ) {
      self.tests.push(One.create(defaultValues));
    },
    addTwo(
      defaultValues: ITwo = {
        id: cuid(),
        type: "Two",
        content: "base two",
        name: "base two",
        optional: "base two",
        twoSpecific: "base two",
        changeContent: () => void 0,
        twoBaseActions: () => void 0
      }
    ) {
      self.tests.push(Two.create(defaultValues));
    }
  }));

export type IRootStore = Instance<typeof RootStore>;

// 그래도 난 switch case가 더 좋은거 같은데. 아니낙 몰겠음. 걍 심심해서 이렇게 해봄
const switchTable = {
  One: (
    type: string,
    defaultValues: IOne = {
      id: cuid(),
      type: "One",
      content: "base one",
      name: "base one",
      optional: "base one",
      oneSpecific: "base one",
      changeContent: () => void 0,
      oneBaseActions: () => void 0
    }
  ) => {
    return One.create(defaultValues);
  },
  Two: (
    type: string,
    defaultValues: ITwo = {
      id: cuid(),
      type: "Two",
      content: "base two",
      name: "base two",
      optional: "base two",
      twoSpecific: "base two",
      changeContent: () => void 0,
      twoBaseActions: () => void 0
    }
  ) => {
    return Two.create(defaultValues);
  }
};
