import React, { Component } from 'react';
import Button from 'material-ui/Button';
import 'typeface-roboto'

import { MenuList, MenuItem } from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import InboxIcon from '@material-ui/icons/MoveToInbox';  // 이거 pr할까?
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
export default class MaterialUINext extends Component {

  render() {
    return (
      <div>
        <Button variant="raised" color="primary">
          Material Ui
    </Button>
        <Paper style={{ width: '85px' }}>
          <MenuList>
            <MenuItem style={{ display: 'block', height: '70px', padding: 10 }} >
              <ListItemIcon style={{ display: 'block', margin: 'auto', fontSize: '50px' }}>
                <SendIcon />
              </ListItemIcon>
              <ListItemText
                style={{ textAlign: 'center', padding: 0 }}
                primary="Session"
              />
            </MenuItem>
            <MenuItem style={{ display: 'block', height: '70px' }}>
              <ListItemIcon style={{ display: 'block', margin: 'auto', fontSize: '50px' }}>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText
                style={{ textAlign: 'center', padding: 0 }}
                primary="Saved"
              />
            </MenuItem>
            <MenuItem style={{ display: 'block', height: '70px' }}>
              <ListItemIcon style={{ display: 'block', margin: 'auto', fontSize: '50px' }}>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText
                style={{
                  textAlign: 'center', padding: 0, wordWrap: 'break-word'
                }}
                primary="WhatstheProblem"
              />
            </MenuItem>
          </MenuList>
        </Paper>
      </div >
    )
  }
}
