import React, { Component } from 'react';
export default class MyCSS extends Component {

  render() {
    const style = {
      app: {
        border: '1px solid black',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
      },
      toolbar: {
        container: {
          border: '1px solid black',
          flex: '0 0 100px',
          display: 'flex',
          flexDirection: 'row',
          // position: 'relative'
          // height: '100px'
        },


      },
      mainContent: {
        border: '1px solid black',
        flex: '1 1 auto',
        display: 'flex',
        flexDirection: 'row',
        // position: 'relative',
        // overflowY: 'auto',
        // height: '80%'

      },
      menu: {
        container: {
          border: '1px solid black',
          flex: '0 0 300px',
          flexWrap: 'nowrap',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          // height: '1000px'
        },
        eachMenu: {
          border: '1px solid black',
          height: '200px',
          flex: '0 0 auto'
        }

      },
      filter: {
        container: {
          border: '1px solid black',
          flex: '0 0 200px',
          display: 'flex',
          flexDirection: 'column',

        },
        eachFilter: {
          border: '1px solid black',
        }
      },
      content: {
        container: {
          border: '1px solid black',
          flex: '1 0',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          display: 'flex',
          flexDirection: 'row',
        },
        eachContent: {
          border: '1px solid black',
          flex: '1 0 100px'
        }
      },
      footer: {
        container: {
          border: '1px solid black',
          flex: '0 0 100px',
          display: 'flex',
          flexDirection: 'row',
          // position: 'relative',
          // bottom: 0,
          // position: 'fixed'
        },
      }
    }
    return (
      <div style={style.app}>
        <div item style={style.toolbar.container}>
          <div>materialUI</div>
          <div>left1</div>
          <div style={{ margin: 'auto' }}>left2</div>
          <div>right1</div>
          <div>right2</div>
        </div>
        <div style={style.mainContent}>
          <div style={style.menu.container}>
            <div style={style.menu.eachMenu}>menu1</div>
            <div style={style.menu.eachMenu}>menu2</div>
            <div style={style.menu.eachMenu}>menu3</div>
            <div style={style.menu.eachMenu}>menu4</div>
            <div style={style.menu.eachMenu}>menu5</div>
            <div style={style.menu.eachMenu}>menu6</div>
            <div style={style.menu.eachMenu}>menu7</div>
            <div style={style.menu.eachMenu}>menu8</div>
            <div style={style.menu.eachMenu}>menu9</div>
            <div style={style.menu.eachMenu}>menu10</div>
            <div style={style.menu.eachMenu}>menu11</div>
          </div>

          <div style={style.filter.container}>
            <div style={style.filter.eachFilter}>filter1</div>
            <div style={style.filter.eachFilter}>filter2</div>
            <div style={style.filter.eachFilter}>filter3</div>
            <div style={style.filter.eachFilter}>filter4</div>
          </div>

          <div style={style.content.container}>
            <div style={style.content.eachContent}>content1~~~~~~~~~~~~~~~~~~~~~~~~</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
            <div style={style.content.eachContent}>content1</div>
          </div>
        </div>
        <div style={style.footer.container}>
          <div>footer1</div>
          <div>footer2</div>
          <div>footer3</div>
          <div>footer4</div>
        </div>
      </div>
    )
  }
}