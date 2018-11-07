import React, { Component } from "react";

import { Memo } from "./components/molecules/Memo";

interface MemoItem {
  content: string;
  completed: boolean;
}
class App extends Component<{
  store: { memo: MemoItem[]; addMemoItem: () => void };
}> {
  render() {
    console.log("store", this.props.store);
    const { memo, addMemoItem } = this.props.store;
    return (
      <div style={{ margin: "100px" }}>
        <Memo memo={memo} addMemoItem={addMemoItem} />
      </div>
    );
  }
}

export default App;
