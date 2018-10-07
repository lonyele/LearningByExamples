import React from 'react';
import ReactDOM from 'react-dom';
import {
  CellMeasurer,
  CellMeasurerCache,
  createMasonryCellPositioner,
  Masonry
} from 'react-virtualized';
import 'react-virtualized/styles.css'
// Array of images with captions
const list = [
  { title: "what...1", content: "up????", height1: "120px" },
  { title: "what...2", content: "up????", height1: "200px" },
  { title: "what...3", content: "up????", height1: "300px" },
  { title: "what...4", content: "up????", height1: "150px" },
  { title: "what...5", content: "up????", height1: "250px" },
  { title: "what...6", content: "up????", height1: "250px" },
  { title: "what...7", content: "up????", height1: "250px" },
  { title: "what...8", content: "up????", height1: "120px" },
  { title: "what...9", content: "up????", height1: "200px" },
  { title: "what...10", content: "up????", height1: "300px" },
  { title: "what...11", content: "up????", height1: "150px" },
  { title: "what...12", content: "up????", height1: "250px" },
  { title: "what...13", content: "up????", height1: "250px" },
  { title: "what...14", content: "up????", height1: "250px" },
  { title: "what...15", content: "up????", height1: "250px" },
  { title: "what...16", content: "up????", height1: "250px" },
  { title: "what...17", content: "up????", height1: "150px" },
  { title: "what...18", content: "up????", height1: "250px" },
  { title: "what...19", content: "up????", height1: "250px" },
  { title: "what...20", content: "up????", height1: "250px" },
  { title: "what...21", content: "up????", height1: "250px" },
  { title: "what...22", content: "up????", height1: "250px" }
];



const cache = new CellMeasurerCache({
  defaultHeight: 250,
  defaultWidth: 250,
  fixedWidth: true
})

const cellPositioner = createMasonryCellPositioner({
  cellMeasurerCache: cache,
  columnCount: 4,
  columnWidth: 250,
  spacer: 10
})
let masonryRef;
export default class VirtualizedMasonry extends React.Component {
  state = {
    width: 800,
    // leftMargin: '50px'
  }
  componentDidMount() {
    window.addEventListener('resize', (what) => {
      const newWidth = what.currentTarget.innerWidth
      // console.log('변한거', what.currentTarget.innerWidth)

      const newColumnCount = Math.floor((newWidth - 50) / 250)
      this.setState({ width: newWidth }) // , leftMargin: (newWidth - newColumnCount * 250 + (newColumnCount - 1) * 10)/2 + 'px' 
      cellPositioner.reset({
        columnCount: newColumnCount,
        columnWidth: 250,
        spacer: 10
      })

      masonryRef.recomputeCellPositions()
    })
  }

  cellRenderer = ({ index, key, parent, style }) => {
    const datum = list[index]
    console.log('이거 언제 render되냐', index, key, parent, "this 가능? ㅠ,ㅠ", this)
    // console.log('style', style)
    style.border = '1px solid black'
    // style.marginLeft = this.state.leftMargin
    return (
      <CellMeasurer
        cache={cache}
        index={index}
        key={key}
        parent={parent}
      >
        <div style={style}>
          {/* <img
          src={datum.source}
          style={{
            height: datum.imageHeight,
            width: datum.imageWidth
          }}
        /> */}
          <div style={{ height: datum.height1 }}>{datum.title}</div>
        </div>
      </CellMeasurer>
    )
  }

  render() {
    return (
      <Masonry
        cellCount={list.length}
        cellMeasurerCache={cache}
        cellPositioner={cellPositioner}
        cellRenderer={this.cellRenderer}
        height={600}
        width={this.state.width}
        ref={ref => masonryRef = ref}
      />
    )
  }
}