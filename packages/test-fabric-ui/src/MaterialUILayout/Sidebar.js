import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
const styles = theme => ({
  menuItem: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'yellow',

  },
  listItemIcon: {
    margin: 'auto',
    fontSize: '30px'
  },
  outerDiv: {
    border: '1px solid black',
    flex: '0 0 80px',
    flexWrap: 'nowrap',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
  }
});
class LeftNavSidebar extends React.Component {
  state = {
    menuSelected: '',
    menus: [
      { name: 'Session', link: '/session' },
      { name: 'Saved', link: '/saved' },
      { name: 'Bookmark', link: '/' },
      { name: 'Text', link: '/' },
      { name: 'Image', link: '/' },
      { name: 'GIF', link: '/' },
      { name: 'Video', link: '/' },
      { name: 'Todo', link: '/' },
      { name: 'Calender', link: '/' },
      { name: 'Calender', link: '/' },
      { name: 'Calender', link: '/' },
      { name: 'Calender', link: '/' },
      { name: 'Calender', link: '/' },
      { name: 'Calender', link: '/' },
      { name: 'Calender', link: '/' },
      { name: 'Calender', link: '/' },
      { name: 'Calender', link: '/' },
      { name: 'Calender', link: '/' },
      { name: 'Calender', link: '/' },
      { name: 'Calender', link: '/' },
      { name: 'Calender', link: '/' },

    ]
  }
  onHandleClick = (menuName) => {
    this.setState({ menuSelected: menuName })
    console.log("??????")
  }
  render() {
    const { classes } = this.props;
    const { menuSelected, menus } = this.state;

    console.log('menuselected', menuSelected)
    return (
      <div className={classes.outerDiv}>
        <List component="nav">
          {menus.map(menu => {
            const color = menuSelected === menu.name ? 'pink' : 'white'
            console.log('color', color)
            return (
              <div key={menu.name} >
                <ListItem style={{ backgroundColor: color }} className={classes.menuItem} button={true} onClick={() => this.onHandleClick(menu.name)} >
                  <ListItemIcon className={classes.listItemIcon}>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={menu.name}
                  />
                </ListItem>
                <Divider />
              </div>
            )
          })}
        </List>

      </div>
    );
  }

}
LeftNavSidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LeftNavSidebar);