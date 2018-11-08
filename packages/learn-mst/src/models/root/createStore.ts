import { RootStore } from "./root";

const initialState = {
  users: {
    "1": {
      id: "1",
      name: "taeheon"
    },
    "2": {
      id: "2",
      name: "roniel"
    },
    "3": {
      id: "3",
      name: "skyrabbit"
    }
  },
  memo: [
    {
      user: "1",
      content: "content 11111",
      completed: true
    },
    {
      user: "2",
      content: "content 2222",
      completed: false
    },
    {
      user: "3",
      content: "content 3333",
      completed: false
    }
  ]
};
export const store = RootStore.create(initialState);
