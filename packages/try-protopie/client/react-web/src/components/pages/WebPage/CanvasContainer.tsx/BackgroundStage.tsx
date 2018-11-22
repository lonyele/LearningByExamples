import { observer } from "mobx-react";
import * as PIXI from "pixi.js";
import * as React from "react";

import { IObject } from "src/mobx-state-tree/stores/object/Object";
import { TestRectangle } from "./TestRectangle";
import { TestText } from "./TestText";

export const PixiContext = React.createContext({
  whatup: "asdfaf",
  stage: undefined
});

@observer
class BackgroundStage extends React.Component<any, any> {
  public backgroundStage: any = undefined; // React.createRef<HTMLDivElement>();
  public test = React.createRef<HTMLDivElement>();
  public state = {
    yoStage: undefined
  };
  public componentDidMount() {
    const what = document.getElementById("BackgroundStage");

    if (what !== null && what !== undefined) {
      const app = new PIXI.Application({
        width: what.clientWidth,
        height: what.clientHeight,
        backgroundColor: 0xffff00ff
      });
      what.appendChild(app.view);
      console.log("what", what.clientWidth, what.clientHeight);
      //   app.renderer.resize(what.clientWidth, what.clientHeight);
      this.backgroundStage = app;
      this.setState({ yoStage: app });
    } else {
      console.log("여긴 들어 오겠는데??");
    }
  }

  public componentDidUpdate(prevProps: any, prevState: any, snapshot: any) {
    // this.mystage.renderer.resize(width, height);
  }
  public render() {
    // const TestText = this.props.testText;
    return (
      <PixiContext.Provider
        value={{ whatup: "asdf22222", stage: this.backgroundStage }}
      >
        <div
          ref={this.test}
          id="BackgroundStage"
          style={{ border: "1px solid black", height: "80.3vh", width: "100%" }}
        >
          {/* {this.props.children} */}
          {this.props.objects.objects.map((object: IObject, index: number) => {
            if (object.object.type === "Rectangle") {
              return (
                <TestRectangle
                  key={object.id}
                  stage={this.backgroundStage}
                  x={index * 50}
                  y={index * 50}
                />
              );
            }
            return (
              <TestText
                key={object.id}
                stage={this.backgroundStage}
                yoStage={this.state.yoStage}
                what="up???"
                x={index * 30}
                y={index * 30}
                name={object.name}
              />
            );
          })}
        </div>
      </PixiContext.Provider>
    ); //  ref={this.mystage}
  }
}

BackgroundStage.contextType = PixiContext;
export default BackgroundStage;
