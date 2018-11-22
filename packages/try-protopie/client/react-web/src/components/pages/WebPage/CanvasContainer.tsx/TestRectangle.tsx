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
        console.log("여긴 드러옴????", this.props);
        // (hul as any).moveTo(this.props.x, this.props.y);
        (hul as any).x = this.props.x;
        (hul as any).y = this.props.y;
        (hul as any).width = this.props.width;
        (hul as any).height = this.props.height;
      }
    } else {
      console.log("TestText CDU 인데 ELSE임");
    }
  }

  public createRectangle = (stage: any) => {
    const graphics = new PIXI.Graphics();
    graphics.lineStyle(2, 0x0000ff, 1);
    graphics.beginFill(0xff700b, 1);
    graphics.drawRect(
      this.props.x,
      this.props.y,
      this.props.width,
      this.props.height
    );
    stage.stage.addChild(graphics);
    this.setState({ myRect: graphics });
  };
  public render() {
    return <div />; //  ref={this.mystage}
  }
}
