import * as React from "react";

import { IMemo, Memo } from "./components/molecules/Memo";
import { IRootStore } from "./models/root/root";
class App extends React.Component<{
  store: IRootStore;
}> {
  private renderMemos = (memos: Map<string, IMemo>) => {
    const hul: JSX.Element[] = [];
    memos.forEach((memo: IMemo) => {
      hul.push(<Memo key={memo.id} memo={memo} />);
    });
    return hul;
  };
  public render() {
    console.log("store", this.props.store);
    const { memos } = this.props.store;
    return (
      <div style={{ margin: "100px", display: "flex" }}>
        {this.renderMemos(memos)}
      </div>
    );
  }
}

export default App;
