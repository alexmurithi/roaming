import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {makeStyles} from '@material-ui/styles';
import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Logo from '../Assets/download.png';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';



const useStyles =makeStyles(theme=>({
   menuBtn:{
       width:"16px",
       height:"14px"
   },
   topNav:{
    boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.1)",
    marginBottom:"8em",
    
   },

   toolBarMargin:{
       ...theme.mixins.toolbar
   },
  
   logo:{
       objectFit:"contain"
   },
   logoBox:{
       ...theme.align
   },
   badgeSearchDot:{
      
   }
}))

export default function Headers(props){
    const classes =useStyles()
  return(
      <React.Fragment>
         <AppBar className={classes.topNav}>
             <Toolbar>
                 <Hidden lgUp>
                 <IconButton color="secondary" className={classes.menuBtn}>
                    <MenuIcon></MenuIcon>
                </IconButton>
                 </Hidden>
                
              <Box flexGrow={2} className={classes.logoBox}>
                <Link href="#">
                    <img src={Logo} alt="Safaricom Logo" height="48px" width="100px" className={classes.logo}/>
                </Link>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                  <Box>
                      <IconButton>
                          <Badge variant="dot" color="secondary" clasName={classes.badgeSearchDot} overlap="circle" >
                          <SearchIcon color="secondary" ></SearchIcon>
                          </Badge>
                         
                      </IconButton>
                  </Box>
                  <Box>
                  <IconButton>
                         <NotificationsIcon color="secondary"></NotificationsIcon>
                      </IconButton>
                  </Box>
              </Box>
               
             </Toolbar>
         </AppBar>

         <Box className={classes.toolBarMargin}></Box>

      </React.Fragment>
  )       
}