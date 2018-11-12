import * as React from "react";
import { EditMenu } from "src/components/molecules/EditMenu/EditMenu";
import { FileMenu } from "src/components/molecules/FileMenu/FileMenu";
import { HelpMenu } from "src/components/molecules/HelpMenu/HelpMenu";
import { InsertMenu } from "src/components/molecules/InsertMenu/InsertMenu";
import { ObjectMenu } from "src/components/molecules/ObjectMenu/ObjectMenu";
import { RunMenu } from "src/components/molecules/RunMenu/RunMenu";
import { ViewMenu } from "src/components/molecules/ViewMenu/ViewMenu";
import { WindowMenu } from "src/components/molecules/WindowMenu/WindowMenu";

export default class MenuContainer extends React.Component<any, any> {
  public render() {
    return (
      <div style={{ backgroundColor: "rgb(244, 244, 244)" }}>
        <FileMenu />
        <EditMenu />
        <InsertMenu />
        <ObjectMenu />
        <ViewMenu />
        <RunMenu />
        <WindowMenu />
        <HelpMenu />
      </div>
    );
  }
}
