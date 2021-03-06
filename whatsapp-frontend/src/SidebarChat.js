import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));


 
function SidebarChat() {
    const classes = useStyles();
    return (
        <div className="sidebarChat">
                <Avatar  className={classes.large} />
                <div className="sidebarChat_info">
                    <span className="span1">Dotsai</span>
                    <span className="span2">this is the last message</span>
                </div>
        </div>
    )
}

export default SidebarChat
