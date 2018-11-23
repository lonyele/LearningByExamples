import { observer } from "mobx-react";
import * as React from "react";

import { PixiContext } from "./BackgroundStage";

@observer
export class TestText extends React.Component<any, any> {
  public state = {
    myText: undefined, // new PIXI.Text()
    myRichText: undefined
  };
  public componentDidMount() {
    console.log("this.props??????? cmd", this);
    if (this.props.stage !== undefined) {
      console.log("TestText CDM 인데 STAGE 이씀");
      this.createText(this.props.stage);
    } else {
      console.log("TestText CMD stage 없음");
    }
  }
  public componentDidUpdate() {
    console.log("뭐 바뀜?? testText", this);
    if (this.props.stage !== undefined) {
      console.log("TestText CDU 들어옴", this.props.stage);
      const hul = this.state.myText;
      if (hul === undefined) {
        this.createText(this.props.stage);
      } else {
        (hul as any).text = this.props.name;
      }
    } else {
      console.log("TestText CDU 인데 ELSE임");
    }
  }
  public createText = (stage: any) => {
    const style = new PIXI.TextStyle({
      fontFamily: "Arial",
      fontSize: 36,
      fontStyle: "italic",
      fontWeight: "bold",
      fill: ["#ffffff", "#00ff99"], // gradient
      stroke: "#4a1850",
      strokeThickness: 5,
      dropShadow: true,
      dropShadowColor: "#000000",
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
      wordWrap: true,
      wordWrapWidth: 440
    });

    const basicText = new PIXI.Text(this.props.name, style);
    basicText.x = this.props.x;
    basicText.y = this.props.y;
    stage.stage.addChild(basicText);
    this.setState({ myText: basicText });
  };
  public render() {
    console.log("this.props testText", this);
    return <div id="DeviceStage" style={{ position: "absolute" }} />; //  ref={this.mystage}
  }
}

TestText.contextType = PixiContext;
