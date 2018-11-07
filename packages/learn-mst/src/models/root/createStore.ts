import { RootStore } from "./root";

const initialState = {
  memo: [
    {
      content: "content 11111",
      completed: true
    },
    {
      content: "content 2222",
      completed: false
    }
  ]
};
export const store = RootStore.create(initialState);
