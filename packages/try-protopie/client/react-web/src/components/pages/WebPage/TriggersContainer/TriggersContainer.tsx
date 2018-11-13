import { observer } from "mobx-react";
import * as React from "react";

import { ITrigger } from "src/mobx-state-tree/stores/trigger/Trigger";
import { ContainerHeader } from "../ContainerHeader/ContainerHeader";
import { Trigger } from "./Trigger";

@observer
export class TriggersContainer extends React.Component<any, any> {
  public render() {
    const { triggers } = this.props.triggers;
    return (
      <div style={{ border: "1px solid black" }}>
        <ContainerHeader name={"Trigger"} />
        {triggers.map((trigger: ITrigger) => (
          <Trigger key={trigger.id} trigger={trigger} />
        ))}
      </div>
    );
  }
}
