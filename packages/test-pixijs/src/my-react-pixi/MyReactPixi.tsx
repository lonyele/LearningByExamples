import { Sprite, Stage } from "@inlet/react-pixi";
import * as React from "react";

import bunny from "../bunny.jpg";

export const MyReactPixi = () => {
  return (
    <Stage width={400} height={400}>
      <Sprite image={bunny} x={100} y={100} />
    </Stage>
  );
};

// export function MyReactPixi(props: any) {
//   return (
//     <Stage>
//       <Sprite image="../bunny.png" x={100} y={100} />
//     </Stage>
//   );
// }
