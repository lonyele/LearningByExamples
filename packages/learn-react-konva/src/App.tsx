import * as React from "react";
import "./App.css";
// import logo from './logo.svg';

import Map from "./Map";
class App extends React.Component<any, any> {
  public state: any = {
    mapLayer: true,
    dogLayer: true,
    pawLayer: true
  };
  public mapButton = (e: any) => {
    this.setState({ mapLayer: !this.state.mapLayer });
  };
  public dogButton = (e: any) => {
    this.setState({ dogLayer: !this.state.dogLayer });
  };
  public pawButton = (e: any) => {
    this.setState({ pawLayer: !this.state.pawLayer });
  };

  public saveStage = (e: any) => {
    const json = this.state.mystage.getStage().toJSON();
    console.log("serialized json", json);
    this.setState({ saved: json });
  };
  public setStage = (stageRef: any) => {
    this.state.mystage = stageRef;
  };
  // public loadStage = () => {

  // };

  /** 여기서 받아서 데이터를 바꿈. dispatch던 뭐던
   *  1. 맵은 레이어마다 데이터를 기반으로 map을 뿌리니까
   *     데이터를 바꾸면 추가가 됨. (맵에 추가, optimistic + mutation)
   *  2. draggable=true해서 막 옮기거나 한후에 마지막 dragEnd에서
   *     데이터를 바꿔줌.(optimistic + mutation)
   *  3. 이미지는... 다 고정 사이즈로 하자..
   *    1 - 겹쳐서 못움직이는 상태
   *    2 - 여러개가 한곳에 몰려서 복잡할때
   */
  // public addFacility = () => {

  //   }
  public render() {
    return (
      <div style={{ display: "flex", border: "1px solid black" }}>
        <div style={{ flex: "1 1 60%", border: "1px solid black" }}>
          <Map
            mapLayer={this.state.mapLayer}
            dogLayer={this.state.dogLayer}
            pawLayer={this.state.pawLayer}
            setStage={this.setStage}
          />
          <div
            style={{
              position: "absolute",
              width: "300px",
              height: "300px",
              border: "1px solid black",
              top: 0,
              left: 1000,
              background: "skyblue"
            }}
          >
            가능???????????? 이거는 걍 일반 react component임
          </div>
        </div>
        <div style={{ flex: "1 1 40%", border: "1px solid black" }}>
          <p>두번쨰</p>
          <button onClick={this.mapButton}>mapLayer</button>
          <button onClick={this.dogButton}>dogLayer</button>
          <button onClick={this.pawButton}>pawLayer</button>
          <button onClick={this.saveStage}>Save Stage</button>
          {/* <button onClick={this.addFacility}>Add Facility</button> */}
          {/* <button onClick={this.loadStage}>Load Stage</button> */}
        </div>
      </div>
    );
  }
}
export default App;
