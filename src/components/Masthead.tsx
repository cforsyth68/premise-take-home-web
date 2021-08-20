import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import ElevationScroll from './ElevatedScroll'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    background: "#543C30",
  }
}));


const Masthead = (props: RouteComponentProps) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.ChangeEvent<any>) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (route: string) => {
    history.push(route);
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <ElevationScroll {...props}>
        <AppBar position="static" variant="elevation" className={classes.appBar}>
          <Toolbar variant="dense">
            <Typography variant="h6" className={classes.title}>
              Charles Forsyth's Take Home Interview Challenge
            </Typography>
            <div>
              <IconButton
                edge="end"
                aria-controls="menu-appbar"
                aria-label="menu"
                color="inherit"
                onClick={handleMenu}>
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/characters')}>Characters</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
export default withRouter(Masthead);