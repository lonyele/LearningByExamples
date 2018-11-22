import { observer } from "mobx-react";
import * as React from "react";

@observer
export class TestRectangle extends React.Component<any, any> {
  public state = {
    myRect: undefined // new PIXI.Text()
  };

  public componentDidMount() {
    if (this.props.stage !== undefined) {
      this.createRectangle(this.props.stage);
    } else {
      console.log("TestText CMD stage 없음");
    }
  }
  public componentDidUpdate() {
    console.log("뭐 바뀜?? testText", this);
    if (this.props.stage !== undefined) {
      const hul = this.state.myRect;
      if (hul === undefined) {
        this.createRectangle(this.props.stage);
      } else {
        (hul as any).moveTo(this.props.x, this.props.y);
      }
    } else {
      console.log("TestText CDU 인데 ELSE임");
    }
  }

  public createRectangle = (stage: any) => {
    const graphics = new PIXI.Graphics();
    graphics.lineStyle(2, 0x0000ff, 1);
    graphics.beginFill(0xff700b, 1);
    graphics.drawRect(this.props.x, this.props.y, 120, 120);
    stage.stage.addChild(graphics);
    this.setState({ myRect: graphics });
  };
  public render() {
    return null; //  ref={this.mystage}
  }
}
