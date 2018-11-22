import * as PIXI from "pixi.js";
import * as React from "react";
import { Sprite, Stage, Text } from "react-pixi-fiber";

import bunny from "../bunny.jpg";

function Bunny(props: any) {
  return <Sprite texture={PIXI.Texture.fromImage(bunny)} {...props} />;
}

export class ReactPixiFiber extends React.Component {
  public render() {
    return (
      <div>
        <Text text="Hello World!" x={200} y={200} />
        <Stage width={400} height={400} options={{ backgroundColor: 0x10bb99 }}>
          <Bunny x={200} y={200} />
        </Stage>
      </div>
    );
  }
}
