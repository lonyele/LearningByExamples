import { observer } from "mobx-react";
import * as React from "react";
import { IRootStore } from "src/mobx-state-tree/root/root";
import { ContainerHeader } from "../ContainerHeader/ContainerHeader";

@observer
export class PreviewContainer extends React.Component<
  { store: IRootStore },
  any
> {
  // private calculateRatio = (width: number, height: number) => {

  // }
  public render() {
    const { devices } = this.props.store;
    const { name, width, height, extra } = devices.selectedDevice;

    return (
      <div style={{ border: "1px solid black" }}>
        <ContainerHeader name={"Preview"} />
        <div style={{ padding: "10px" }}>
          <div style={{ padding: "5px", paddingTop: 0, textAlign: "center" }}>
            {name} - {width} X {height} {extra}
          </div>
          <div
            style={{
              display: "flex ",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "75vh",
              border: "1px solid black"
            }}
          >
            <div>Relative size not working!!</div>
            <div>width: {width}px</div>
            <div>height: {height}px</div>
          </div>
        </div>
      </div>
    );
  }
}
