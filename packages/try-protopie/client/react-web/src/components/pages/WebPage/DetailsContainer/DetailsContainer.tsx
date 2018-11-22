import { observer } from "mobx-react";
import * as React from "react";
import { ContainerHeader } from "../ContainerHeader/ContainerHeader";
import { AlignContainer } from "./AlignContainer";
import { Details } from "./Details/Details";
import { PictureContainer } from "./PictureContainer";

@observer
export class DetailsContainer extends React.Component<any, any> {
  public render() {
    const { selectedObject } = this.props;
    return (
      <div style={{ border: "1px solid black" }}>
        <ContainerHeader name={"Details"} />
        <AlignContainer selectedObject={selectedObject[0]} />
        <PictureContainer selectedObject={selectedObject[0]} />
        <Details selectedObject={selectedObject[0]} />
      </div>
    );
  }
}
