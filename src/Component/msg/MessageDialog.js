import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Dialog, DialogContent, Button, DialogContentText } from '@material-ui/core';

const styles = () => ({
  textStyle: {
    textAlign:"center",
  },
  imgStyle: {
    width:'40px',
    height:'40px',
    marginTop:'20px',
    marginLeft:'20px',
  },
  buttonStyle: {
    margin: '10px',
  },
});

class MessageDialog extends Component {
  render() {
    const { classes, open, onClose, content } = this.props;

    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogContent>
          <DialogContentText
            className={classes.textStyle}
            id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <Button
          className={classes.buttonStyle}
          onClick={onClose}
          variant="outlined"
          autoFocus>
          확인
        </Button>
      </Dialog>
    );
  }
}

export default withStyles(styles)(MessageDialog);
