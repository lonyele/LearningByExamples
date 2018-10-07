import React from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
const ReactGridLayout = WidthProvider(RGL);
const data = [
  { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
  { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: 'c', x: 4, y: 0, w: 1, h: 2 },
  { i: 'd', x: 4, y: 0, w: 1, h: 4 },
  { i: 'e', x: 8, y: 0, w: 5, h: 2 }
]
export default class NoDraggingLayout extends React.PureComponent {
  static defaultProps = {
    className: "layout",
    isDraggable: false,
    isResizable: false,
    items: 50,
    cols: 12,
    rowHeight: 30,
    onLayoutChange: function () { }
  };

  constructor(props) {
    super(props);
  }

  generateDOM() {
    const arrays = ['a', 'b', 'c', 'd', 'e']
    return arrays.map((array, index) => {
      return (
        <div key={array} style={{ border: '1px solid black' }}>
          <span className="text">{index}</span>
        </div>
      )
    })
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {

    return (
      <ReactGridLayout
        layout={data}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        {this.generateDOM()}
      </ReactGridLayout>
    );
  }
}

const newData = [
  { id: 'what1', title: 'title1', content: 'content1', height: 300 },
  { id: 'what2', title: 'title2', content: 'content2', height: 500 },
  { id: 'what3', title: 'title3', content: 'content3', height: 100 },
  { id: 'what4', title: 'title4', content: 'content4', height: 400 },
  { id: 'what5', title: 'title5', content: 'content5', height: 200 },
  { id: 'what6', title: 'title6', content: 'content6', height: 500 },
  { id: 'what7', title: 'title7', content: 'content7', height: 100 },
  { id: 'what8', title: 'title8', content: 'content8', height: 300 },
  { id: 'what9', title: 'title9', content: 'content9', height: 400 },
  { id: 'what10', title: 'title10', content: 'content10', height: 500 },
  { id: 'what11', title: 'title11', content: 'content11', height: 100 },
  { id: 'what12', title: 'title12', content: 'content12', height: 200 }
]
export class MyFirstGrid extends React.Component {
  renderMasonryItems = (rowHeight) => {
    console.log("????")
    return newData.map((data, i) => {
      const gridData = {
        x: (i * 2) % 8,
        y: 0,
        w: 2,
        h: Math.round(data.height / rowHeight) / 3
      }
      return (
        <div key={data.id} data-grid={gridData} style={{ border: '1px solid black' }}>
          <div>{data.title}</div>
          <div>{data.content}</div>
        </div>
      )
    })
  }
  render() {
    console.log("wahtthe")
    const rowHeight = 10
    return (
      <RGL className="layout" cols={16} rowHeight={rowHeight} width={1200}>
        {this.renderMasonryItems(rowHeight)}
        {/* <div key="a" style={{ border: '1px solid black' }} data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>a</div>
        <div key="b" style={{ border: '1px solid black' }} data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>b</div>
        <div key="c" style={{ border: '1px solid black' }} data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>c</div> */}
      </RGL>
    )
  }
}