import { observer } from "mobx-react";
import * as React from "react";

import { ContainerHeader } from "../ContainerHeader/ContainerHeader";
import BackgroundStage from "./BackgroundStage"; // BackgroundStage
// import { TestText } from "./TestText";
// import { TestText } from "./TestText";
// import { DeviceStage } from "./DeviceStage";

@observer
export class CanvasContainer extends React.Component<any, any> {
  public render() {
    const { devices, objects } = this.props.store;
    const { width, height } = devices.selectedDevice;
    return (
      <div style={{ border: "1px solid black" }}>
        <ContainerHeader name={"Scene 1"} />
        <div>CanvasContainer~~~~</div>

        <BackgroundStage width={width} height={height} objects={objects}>
          {/* <TestText /> */}
        </BackgroundStage>
      </div>
    );
  }
}
// style={{ overflow: "auto" }}
