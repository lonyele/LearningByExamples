import React, { Component } from 'react';
import SortableTree from 'react-sortable-tree';
import FileExplorerTheme from 'react-sortable-tree-theme-file-explorer';

export default class Tree extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: [
        { title: 'whollycrap~~~~~~~~~~~~~~~~~~~~~~~~', children: [ { title: 'index.js' }, { title: 'what' } ] },
        { title: 'src/', children: [ { title: 'index.js' }, { title: 'what' } ] },
        { title: 'src/', children: [ { title: 'index.js' }, { title: 'what' } ] }
      ],
    };
  }

  render() {
    console.log(FileExplorerTheme);
    console.log("asdfasdfasf")
    return (
      <div style={{ height: 400 }}>
        <SortableTree
          treeData={this.state.treeData}
          onChange={treeData => this.setState({ treeData })}
          theme={FileExplorerTheme}
        />
      </div>
    );
  }
}

const What = () => {
  return (
    <div>
    <h5>됨??</h5>
    <h5>헐??</h5>
    <h5>되지???</h5>
    </div>
  ) 
}