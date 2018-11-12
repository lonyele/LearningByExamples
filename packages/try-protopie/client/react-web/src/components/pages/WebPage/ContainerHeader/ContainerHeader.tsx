import * as React from "react";

interface IContainerHeaderProps {
  name: string;
}

export class ContainerHeader extends React.Component<
  IContainerHeaderProps,
  any
> {
  public render() {
    const { name } = this.props;
    return (
      <div
        style={{
          borderBottom: "1px solid black",
          paddingTop: "5px",
          paddingBottom: "5px"
        }}
      >
        <span style={{ borderRight: "1px solid black", padding: "5px" }}>
          {name}
        </span>
      </div>
    );
  }
}
