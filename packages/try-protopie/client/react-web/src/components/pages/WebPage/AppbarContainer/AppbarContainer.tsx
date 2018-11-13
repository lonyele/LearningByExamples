import * as React from "react";

import { CloudButton } from "./CloudButton";
import { ContainerButton } from "./ContainerButton";
import { DeviceModal } from "./DeivceModal/DeviceModal";
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
        style={{
          border: "1px solid black",
          height: "50px",
          display: "flex",
          padding: "7px",
          paddingBottom: 0
        }}
      >
        <ImageButton />
        <VideoButton />
        <ShapeButton addObject={this.props.store.objects.addObject} />
        <TextButton addObject={this.props.store.objects.addObject} />
        <ContainerButton />
        <DeviceModal devices={this.props.store.devices} />
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
