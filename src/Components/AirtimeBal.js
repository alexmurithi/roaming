import React from 'react';
import {makeStyles} from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles =makeStyles(theme=>({
    root:{
       
    },
    airtimeCard:{
        ...theme.card,
        marginBottom:21
    },
    airtimeBal:{
        fontSize:12,
        textAlign:"center",
       
        lineHeight:0.5
        
    },
    roamingDataBundle:{
        ...theme.card,
        marginBottom:10
    },
    roamingDataText:{
        ...theme.contentRoamingText
    }
    
}))

export default function AirtimeBal(props){
    const classes =useStyles()
    return(
        <React.Fragment>
            {/* <Container > */}
               <Grid container spacing={0} >
                   <Grid item xs={12}>
                       <Card className={classes.airtimeCard}>
                           <CardContent>
                               <Typography className={classes.airtimeBal} component="h6" color="secondary">Airtime Balance : Ksh. 20</Typography>
                           </CardContent>
                       </Card>
                   </Grid>
                   <Grid item xs={12}>
                       
                            <Card className={classes.roamingDataBundle}>
                                <CardContent className={classes.roamingDataCardContext}>

                                    <Box display="flex"> 

                                    <Box flexGrow={1}>
                                       <Typography component="h5" className={classes.roamingDataText}>Roaming Data Bundles</Typography>
                                    </Box>

                                    <Box >
                                        <ChevronRightIcon  />
                                    </Box >
                                    </Box>
                                   
                                    
                                </CardContent>
                            </Card>
                       

                   
                   </Grid>

                   <Grid item xs={12}>
                       
                            <Card className={classes.roamingDataBundle} >
                                <CardContent className={classes.roamingDataCardContext}>

                                    <Box display="flex"> 

                                    <Box flexGrow={1}>
                                       <Typography component="h5" className={classes.roamingDataText}>Roaming Data Bundles</Typography>
                                    </Box>

                                    <Box >
                                        <ChevronRightIcon  />
                                    </Box >
                                    </Box>
                                   
                                    
                                </CardContent>
                            </Card>


                            <Card className={classes.roamingDataBundle} >
                                <CardContent className={classes.roamingDataCardContext}>

                                    <Box display="flex"> 

                                    <Box flexGrow={1}>
                                       <Typography component="h5" className={classes.roamingDataText}>Roaming Data Bundles</Typography>
                                    </Box>

                                    <Box >
                                        <ChevronRightIcon  />
                                    </Box >
                                    </Box>
                                   
                                    
                                </CardContent>
                            </Card>
                       

                   
                   </Grid>
               </Grid>
               
            {/* </Container> */}
        </React.Fragment>
    )
}