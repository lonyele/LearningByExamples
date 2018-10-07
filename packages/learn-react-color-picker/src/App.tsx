import * as React from "react";
import {
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker
} from "react-color";
import "./App.css";
class App extends React.Component {
  public render() {
    return (
      <div>
        <SketchPicker />
        <AlphaPicker />
        <BlockPicker />
        <ChromePicker />
        <CirclePicker />
        <CompactPicker />
        <GithubPicker />
        <HuePicker />
        <MaterialPicker />
        <PhotoshopPicker />
        <SliderPicker />
        <SwatchesPicker />
        <TwitterPicker />
      </div>
    );
  }
}

export default App;
