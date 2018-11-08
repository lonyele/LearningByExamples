import { Filter } from "src/components/molecules/Memo/models/Memo.model";
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
  memos: {
    "222": {
      id: "222",
      user: "1",
      memoItems: [
        {
          id: "qqqqqq",
          user: "1",
          content: "content 11111",
          completed: true
        },
        {
          id: "wwwwww",
          user: "2",
          content: "content 2222",
          completed: false
        },
        {
          id: "eeeee",
          user: "3",
          content: "content 3333",
          completed: false
        }
      ],
      filter: Filter.All
    },
    "444": {
      id: "444",
      user: "2",
      memoItems: [
        {
          id: "qqqqqq333",
          user: "1",
          content: "content 11111",
          completed: true
        },
        {
          id: "wwwwww333",
          user: "2",
          content: "content 2222",
          completed: false
        },
        {
          id: "eeeee333",
          user: "3",
          content: "content 3333",
          completed: false
        },
        {
          id: "wwwwww333",
          user: "2",
          content: "content 2222",
          completed: false
        },
        {
          id: "eeeee333",
          user: "3",
          content: "content 3333",
          completed: false
        }
      ],
      filter: Filter.All
    }
  }
};
export const store = RootStore.create(initialState);
