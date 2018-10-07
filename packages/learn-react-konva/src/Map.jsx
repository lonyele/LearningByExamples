import * as React from "react";
import "./App.css";
import { MapImage } from "./MapImage";
import { DogImage } from "./DogImage";
import { PawImage } from "./PawImage";
// import logo from './logo.svg';

import { Layer, Stage } from "react-konva";

// VERY IMPORTANT NOTES
// at first we will set image state to null
// and then we will set it to native image instanse
// only when image is loaded
class Map extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    // this.stage = undefined;

    this.state = {
      posX: 0,
      posY: 0
    };
  }
  setStage = element => {
    // this.setStage({ mystage: element });
    this.state.mystage = element;
    this.props.setStage(element);
  };
  // componentDidMount() {
  //   window.addEventListener("wheel", e => {
  //     const scaleBy = 1.2;
  //     e.preventDefault();
  //     // console.log("1", this.refs.stage);
  //     // console.log("2", this.refs.stage.getStage());
  //     // console.log("delta", e.deltaY);
  //     const stage = this.mystage.getStage();
  //     const oldScale = stage.scaleX();
  //     const mousePointTo = {
  //       x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
  //       y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
  //     };
  //     // console.log("getPointerPositoin", stage.getPointerPosition());
  //     // console.log("absolutePosition", stage.getAbsolutePosition());
  //     // console.log("Position", stage.position());
  //     // console.log("scale", stage.scale());
  //     // console.log("x", stage.x(), ", y:", stage.y());
  //     // console.log("width", stage.getWidth());
  //     // console.log("getClientRect", stage.getClientRect());
  //     const newScale = e.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
  //     console.log(newScale);
  //     if (newScale > 2.5 || newScale < 1) {
  //       return;
  //     }
  //     stage.scale({
  //       x: newScale,
  //       y: newScale
  //     });

  //     const newPos = {
  //       x:
  //         -(mousePointTo.x - stage.getPointerPosition().x / newScale) *
  //         newScale,
  //       y:
  //         -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
  //     };
  //     console.log("newPos", newPos);
  //     const pos = stage.position();
  //     const scale = stage.scaleX();
  //     if (pos.x < -1300 * (newScale - 1)) {
  //       newPos.x = -1300 * (newScale - 1);
  //     } else if (pos.x > 0) {
  //       newPos.x = 0;
  //     }
  //     if (pos.y < -700 * (newScale - 1)) {
  //       newPos.y = -700 * (newScale - 1);
  //     } else if (pos.y > 0) {
  //       newPos.y = 0;
  //     }
  //     stage.position(newPos);
  //     stage.batchDraw();
  //   });
  // }

  dragBound = pos => {
    const stage = this.mystage.getStage();
    const scale = stage.scaleX();
    let newX = pos.x; // = pos.x <= -500 * scale ? -500 * scale : pos.x
    let newY = pos.y;
    if (pos.x <= -500 * scale) {
      newX = -500 * scale;
    } else if (pos.x >= 500 * scale) {
      newX = 500 * scale;
    }

    if (pos.y <= -600 * scale) {
      newY = -600 * scale;
    } else if (pos.y >= 100 * scale) {
      newY = 100 * scale;
    }
    const newPos = { x: newX, y: newY };
    console.log(
      "scaleX 500",
      scale * -500,
      "/ ",
      scale * 500,
      "pos",
      { ...pos },
      "newPos",
      {
        ...newPos
      }
    );
    return newPos;
  };
  dragMove = e => {
    // console.log("drage move e", e);
  };
  mouseWheel = e => {
    const scaleBy = 1.2;
    console.log("e", e);
    // e.preventDefault();
    // console.log("1", this.refs.stage);
    // console.log("2", this.refs.stage.getStage());
    // console.log("delta", e.deltaY);
    const stage = this.mystage.getStage();
    const oldScale = stage.scaleX();
    const mousePointTo = {
      x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
      y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
    };
    // console.log("getPointerPositoin", stage.getPointerPosition());
    // console.log("absolutePosition", stage.getAbsolutePosition());
    // console.log("Position", stage.position());
    // console.log("scale", stage.scale());
    // console.log("x", stage.x(), ", y:", stage.y());
    // console.log("width", stage.getWidth());
    // console.log("getClientRect", stage.getClientRect());
    const newScale = e.evt.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
    console.log(newScale);
    if (newScale > 2.5 || newScale < 1) {
      return;
    }
    stage.scale({ x: newScale, y: newScale });

    const newPos = {
      x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
      y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
    };
    console.log("newPos", newPos);
    const pos = stage.position();
    const scale = stage.scaleX();
    if (pos.x < -1300 * (newScale - 1)) {
      newPos.x = -1300 * (newScale - 1);
    } else if (pos.x > 0) {
      newPos.x = 0;
    }
    if (pos.y < -700 * (newScale - 1)) {
      newPos.y = -700 * (newScale - 1);
    } else if (pos.y > 0) {
      newPos.y = 0;
    }
    stage.position(newPos);
    stage.batchDraw();
  };
  newDragBound = pos => {
    const stage = this.mystage.getStage();
    const scale = stage.scaleX();
    let newX = pos.x;
    let newY = pos.y;
    if (pos.x < -1300 * (scale - 1)) {
      newX = -1300 * (scale - 1);
    } else if (pos.x > 0) {
      newX = 0;
    }
    if (pos.y < -700 * (scale - 1)) {
      newY = -700 * (scale - 1);
    } else if (pos.y > 0) {
      newY = 0;
    }
    const newPos = { x: newX, y: newY };
    return newPos;
  };
  render() {
    return (
      <div>
        <Stage
          ref={this.setStage}
          width={1300}
          height={700}
          style={{ border: "1px solid black" }}
          draggable={true}
          onDragMove={this.dragMove}
          dragBoundFunc={this.newDragBound}
          onContentWheel={this.mouseWheel}
        >
          <Layer visible={this.props.mapLayer}>
            <MapImage />
          </Layer>
          <Layer visible={this.props.dogLayer}>
            <DogImage x={0} y={0} />
            <DogImage x={200} y={200} />
            <DogImage x={400} y={400} />
          </Layer>
          <Layer visible={this.props.pawLayer} opacity={0.3}>
            <PawImage x={50} y={50} />
            <PawImage x={250} y={250} />
            <PawImage x={450} y={450} />
          </Layer>
        </Stage>
        <div>이건 걍 패널로 쓸꺼2</div>
      </div>
    );
  }
}
export default Map;
