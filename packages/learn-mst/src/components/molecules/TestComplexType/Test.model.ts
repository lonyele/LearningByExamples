import { Instance, types } from "mobx-state-tree";

export const ObjectOne = types
  .model({
    type: "One",
    content: types.string,
    oneSpecificContent: "oneSpecificContent"
  })
  .actions(self => ({}));

export type IObjectOne = Instance<typeof ObjectOne>;

export const ObjectTwo = types
  .model({
    type: "Two",
    content: types.string,
    twoSpecific: "twoSpecificContent"
  })
  .actions(self => ({}));

export type IObjectTwo = Instance<typeof ObjectTwo>;

export const Test = types
  .model({
    id: types.string,
    content: types.string,
    optional: "optional~~~",
    whattheHeck: types.union(ObjectOne, ObjectTwo),
    completed: types.boolean
  })
  .actions(self => ({
    changeContent(newContent: string) {
      self.content = newContent;
    },
    whatthe() {
      console.log("????????????");
    }
  }));

export type ITest = Instance<typeof Test>;

// export const TestStore = types
//   .model({
//     tests: types.array(Test)
//   })
//   .actions(self => ({}));

// export type ITestStore = Instance<typeof TestStore>;
