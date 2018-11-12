import * as React from "react";

import { ImageButton } from "./ImageButton";
import { VideoButton } from "./VideoButton";
export class AppbarContainer extends React.Component<any, any> {
  public render() {
    return (
      <div
        style={{ border: "1px solid black", height: "50px", display: "flex" }}
      >
        <ImageButton />
        <VideoButton />
      </div>
    );
  }
}
