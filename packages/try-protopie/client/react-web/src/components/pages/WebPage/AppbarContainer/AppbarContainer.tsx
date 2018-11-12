import * as React from "react";

import { ContainerButton } from "./ContainerButton";
import { ImageButton } from "./ImageButton";
import { PreviewButton } from "./PreviewButton";
import { ShapeButton } from "./ShapeButton";
import { TextButton } from "./TextButton";
import { TriggerButton } from "./TriggerButton/TriggerButton";
import { VideoButton } from "./VideoButton";
export class AppbarContainer extends React.Component<any, any> {
  public render() {
    return (
      <div
        style={{ border: "1px solid black", height: "50px", display: "flex" }}
      >
        <ImageButton />
        <VideoButton />
        <ShapeButton />
        <TextButton />
        <ContainerButton />
        <div>디바이스들~~</div>
        <TriggerButton />
        <PreviewButton />
      </div>
    );
  }
}
