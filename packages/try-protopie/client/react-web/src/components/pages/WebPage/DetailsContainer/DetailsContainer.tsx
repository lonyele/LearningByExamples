import * as React from "react";
import { ContainerHeader } from "../ContainerHeader/ContainerHeader";
import { AlignContainer } from "./AlignContainer";
import { Details } from "./Details/Details";
import { PictureContainer } from "./PictureContainer";

export class DetailsContainer extends React.Component<any, any> {
  public render() {
    const { selectedObjects } = this.props;
    return (
      <div style={{ border: "1px solid black" }}>
        <ContainerHeader name={"Details"} />
        <AlignContainer selectedObject={selectedObjects[0]} />
        <PictureContainer selectedObject={selectedObjects[0]} />
        <Details selectedObject={selectedObjects[0]} />
      </div>
    );
  }
}
