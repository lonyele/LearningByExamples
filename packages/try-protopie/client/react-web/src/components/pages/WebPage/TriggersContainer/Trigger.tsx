import { observer } from "mobx-react";
import * as React from "react";

@observer
export class Trigger extends React.Component<any, any> {
  public render() {
    const { name, trigger } = this.props.trigger;
    console.log("trigger specifi contents", trigger);
    return (
      <div style={{ border: "1px solid black" }}>
        <div>
          {trigger.type} : {name} ??? {trigger.doubleTapContents}
        </div>
      </div>
    );
  }
}
