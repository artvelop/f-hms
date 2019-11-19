import React, { Component } from 'react';
//import AdSense from 'react-adsense';
import Container from '@material-ui/core/Container';
import { Card, CardHeader, Avatar, IconButton, Button, CardMedia, CardActions } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import valknut from './icon/valknut.svg';
import '../App.css';
import MessageDialog from '../Component/msg/MessageDialog';
import solList from '../asset/solList';

const styles = (theme) => ({
  cardStyle: {
    marginTop: '200px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#BE80FF",
  },
  buttonStyle: {
    margin: '10px',
  },
});

class Layout extends Component {

  state = {
    expanded: false,
    msg: {
      dialogState: false,
      content: 'hello',
    }
  };

  closeMsgDialog = () => {
    this.setState({
      msg: {
        dialogState: false,
        content: ''
      }
    });
  }

  openDialog = () => {

    const index = Math.floor(Math.random() * solList.data.length);

    this.setState({
      msg: {
        dialogState: true,
        content: solList.data[index],
      }
    })
  }

  handleExpandClick = () => {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {

    const { classes } = this.props;

    return (
      <Container maxWidth="sm">
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="I will help you">
                <MoreVertIcon/>
              </IconButton>
            }
            title="현재 고민을 생각해주세요"
            subheader="1000.01.01"
          />
          <CardMedia
            className="jb"
            image={valknut}
          />
          {/* <AdSense.Google
            client='ca-pub-2620265297834591'
            slot='7806394673'
            style={{ display: 'block' }}
            layout='in-article'
            format='fluid'
          /> */}
          <CardActions>
            <Button
              className={classes.buttonStyle}
              variant="outlined"
              onClick={this.openDialog}
              aria-expanded={this.state.expanded}
              fullWidth
            >
              도와줘요 솔로몬!!
            </Button>
          </CardActions>
        </Card>
        <MessageDialog
          open={this.state.msg.dialogState}
          onClose={this.closeMsgDialog}
          content={this.state.msg.content}
        />
      </Container>
    );
  }
}

export default withStyles(styles)(Layout);