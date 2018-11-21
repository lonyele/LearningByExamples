import { Instance, types } from "mobx-state-tree";

const OneBase = types
  .model({
    type: "One",
    oneSpecific: "oneSpecificContent"
  })
  .actions(self => ({
    oneBaseActions() {
      console.log("oneBaseActions")
    }
  }));

// export type IObjectOneBase = Instance<typeof ObjectOneBase>;

const TwoBase = types
  .model({
    type: "Two",
    twoSpecific: "twoSpecificContent"
  })
  .actions(self => ({
    twoBaseActions() {
      console.log("twoBaseActions")
    }
  }));

// export type IObjectTwo = Instance<typeof ObjectTwoBase>;

const ObjectBase = types.model({ 
  id: types.string,
  name: types.string,
  content: types.string,
  optional: "Object optional~~~",
}).actions(self => ({
  changeContent(newContent: string) {
    self.content = newContent;
  }
}))




export const One = types.compose("One", ObjectBase, OneBase)
export const Two = types.compose("Two", ObjectBase, TwoBase)
export type IOne = Instance<typeof One>;
export type ITwo = Instance<typeof Two>;

// export const Test = types
//   .model({
//     id: types.string,
//     content: types.string,
//     optional: "optional~~~",
//     whattheHeck: types.union(ObjectOne, ObjectTwo),
//     completed: types.boolean
//   })
//   .actions(self => ({
//     changeContent(newContent: string) {
//       self.content = newContent;
//     },
//     whatthe() {
//       console.log("????????????");
//     }
//   }));

// export type ITest = Instance<typeof Test>;

// export const TestStore = types
//   .model({
//     tests: types.array(Test)
//   })
//   .actions(self => ({}));

// export type ITestStore = Instance<typeof TestStore>;
