import * as React from "react";

import { Memo } from "./components/molecules/Memo";
import { IMemoItem } from "./components/molecules/MemoItem";
class App extends React.Component<{
  store: { memo: IMemoItem[]; addMemoItem: () => void };
}> {
  public render() {
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
