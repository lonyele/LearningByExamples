import * as React from "react";
import { Image } from "react-konva";
import chromeIconWithText from "./svg/chromeIconWithText.svg";
// import Dog from "./svg/Dog.svg";
export class PawImage extends React.Component<any, any> {
  public state: any = {
    age: 10,
    image: null,
    name: "dog 1",
    opacity: 1,
    ref: null
  };
  public componentDidMount() {
    const image = new (window as any).Image();
    image.src = chromeIconWithText;
    // "https://upload.wikimedia.org/wikipedia/commons/1/12/Black_Paw.svg";
    image.onload = () => {
      // setState will redraw layer
      // because "image" property is changed
      this.setState(
        {
          image
        },
        () => {
          this.state.ref.cache();
          this.state.ref.drawHitFromCache();
        }
      );
    };
  }
  public testHover = (e: any) => {
    console.log("hover~~", e);
  };
  public testEnter = (e: any) => {
    console.log("enter", e);
  };
  public dragEnd = (e: any) => {
    console.log("dragEnd", e);
  };
  public changeOpacity = (e: any) => {
    if (this.state.opacity === 0.5) {
      this.setState({ opacity: 1 });
    } else {
      this.setState({ opacity: 0.5 });
    }
  };
  public setRef = (ref: any) => {
    this.state.ref = ref;
    console.log("ref", ref);

    ref.on("click", (e: any) => {
      console.log("???????????");
    });
  };
  public render() {
    if (this.state.ref !== null) {
      // this.state.ref.cache();
      // this.state.ref.drawHitFromCache();
    }

    return (
      <Image
        width={150}
        height={100}
        ref={this.setRef}
        image={this.state.image}
        draggable={true}
        x={this.props.x}
        y={this.props.y}
        onMouseOver={this.testHover}
        onMouseEnter={this.testEnter}
        onDragEnd={this.dragEnd}
        // stroke={"black"}
        // opacity={this.state.opacity}
        // onClick={this.changeOpacity}
      />
    );
  }
}
