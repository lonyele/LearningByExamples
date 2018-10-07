import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Input from 'material-ui/Input';
const styles = {
  root1: {
    border: '1px solid black',
    flex: '1 1',
    flexWrap: 'wrap',
    // overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  tabStrip: {
    flex: '0 1 40px',
    border: '1px solid black',

  },
  header1: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      flex: '0 1 80px',
      border: '1px solid black',
    },
    title: {
      border: '5px solid pink',
      flex: '30%'
    },
    buttonsContainer: {
      border: '1px solid black',
      flex: '70%'
    },
  },
  contentt: {
    container: {
      display: 'flex',
      flexDirection: 'row',
      flex: '1 0',
      border: '1px solid black',
      overflowY: 'auto'
    },
    eachContent: {
      border: '1px solid red',
      flex: '1 0 300px'
    },
  }
};

class Content extends React.Component {
  render() {
    const { classes } = this.props;
    console.log('classes', classes)
    return (
      <div style={styles.root1}>
        <div style={styles.tabStrip}>
          Session tabStrip!!
          <Input
            defaultValue="Search"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
            style={{ width: '400px' }}
          />
          <Input
            defaultValue="Search"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
            style={{ width: '400px' }}
          />
          <Input
            defaultValue="Search"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
            style={{ width: '400px' }}
          />
          <Button variant="raised" color="secondary">SaveSelected</Button>
          <Button variant="raised" color="primary" >RemoveSelected</Button>
          <Button variant="raised" color="secondary">Mode</Button>
        </div>
        <div style={styles.header1.container}>
          <div style={styles.header1.title}>
            <div>title/memo area~~~</div>
          </div>

          <div style={styles.header1.buttonsContainer}>
            <Input
              defaultValue="Search"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
            <Button variant="raised" color="secondary">SaveSelected</Button>
            <Button variant="raised" color="primary" >RemoveSelected</Button>
            <Button variant="raised" color="secondary">Mode</Button>
          </div>
        </div>

        <div style={styles.contentt.container}>
          <div style={{ ...styles.contentt.eachContent, height: '300px' }}>content-1</div>
          <div style={{ ...styles.contentt.eachContent, height: '600px' }}>content-2</div>
          <div style={{ ...styles.contentt.eachContent, height: '900px' }}>content-3</div>
          <div style={{ ...styles.contentt.eachContent, height: '300px' }}>content-4</div>
          <div style={{ ...styles.contentt.eachContent, height: '600px' }}>content-5</div>
          <div style={{ ...styles.contentt.eachContent, height: '300px' }}>content-6</div>
          <div style={{ ...styles.contentt.eachContent, height: '600px' }}>content-7</div>
        </div>

      </div>
    );
  }

}


export default withStyles(styles)(Content);