import * as React from "react";

import { CloudButton } from "./CloudButton";
import { ContainerButton } from "./ContainerButton";
import { DeviceButton } from "./DeviceButton";
import { ImageButton } from "./ImageButton";
import { PlayButton } from "./PlayButton";
import { PreviewButton } from "./PreviewButton";
import { ShapeButton } from "./ShapeButton";
import { TextButton } from "./TextButton";
import { TriggerButton } from "./TriggerButton/TriggerButton";
import { UploadButton } from "./UploadButton";
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
        <div style={{ margin: "auto" }}>디바이스들~~</div>
        <TriggerButton />
        <PreviewButton />
        <DeviceButton />
        <PlayButton />
        <CloudButton />
        <UploadButton />
      </div>
    );
  }
}
