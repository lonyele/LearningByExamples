import * as React from "react";
import { Image } from "react-konva";

export class MapImage extends React.Component<any, any> {
  public state = {
    image: null
  };
  public componentDidMount() {
    const image = new (window as any).Image();
    image.src =
      "https://upload.wikimedia.org/wikipedia/commons/0/00/Intramuros_map.svg";
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState({
        image
      });
    };
  }

  public render() {
    return (
      <Image
        width={1300}
        height={700}
        image={this.state.image}
        // draggable={true}
      />
    );
  }
}
// "https://upload.wikimedia.org/wikipedia/commons/8/89/Dog.svg"
