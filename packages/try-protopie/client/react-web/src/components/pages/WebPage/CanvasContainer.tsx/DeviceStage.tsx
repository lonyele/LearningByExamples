import * as PIXI from "pixi.js";
import * as React from "react";

// import bunny from "../bunny.jpg";

export class DeviceStage extends React.Component<any, any> {
  public deviceStage: any = undefined; // React.createRef<HTMLDivElement>();

  public componentDidMount() {
    const app = new PIXI.Application({
      width: this.props.width,
      height: this.props.height
    });

    const what = document.getElementById("DeviceStage");
    if (what !== null && what !== undefined) {
      what.appendChild(app.view);
    }
    this.deviceStage = app;
  }

  public componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    const { width, height } = this.props;
    console.log("this.mystage", this.deviceStage.current);
    this.deviceStage.renderer.resize(width, height);
    // this.mystage.renderer.resize(width, height);
  }
  public render() {
    console.log("this.props", this.props);
    return <div id="DeviceStage" style={{ position: "absolute" }} />; //  ref={this.mystage}
  }
}
