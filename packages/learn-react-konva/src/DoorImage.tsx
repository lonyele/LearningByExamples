import * as React from "react";
import { Image } from "react-konva";

export class DoorImage extends React.Component<any, any> {
  public state = {
    age: 10,
    image: null,
    name: "dog 1"
  };
  public componentDidMount() {
    const image = new (window as any).Image();
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Black_Star_of_David.svg";
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image
      });
    };
  }
  public testHover = (e: any) => {
    console.log("hover~~", e);
  };
  public testEnter = (e: any) => {
    console.log("enter", e);
  };
  public render() {
    return (
      <Image
        width={50}
        height={50}
        image={this.state.image}
        // draggable={true}
        x={this.props.x}
        y={this.props.y}
        onMouseOver={this.testHover}
        onMouseEnter={this.testEnter}
      />
    );
  }
}
