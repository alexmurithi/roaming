import {createMuiTheme} from '@material-ui/core/styles';

const safaricomGreen ='#43b02a';
const safBackground ='#ffffff';
const orbitRed ='#e4002b';

export default createMuiTheme({
    palette:{
       common:{
           white:`${safBackground}`,
           green:`${safaricomGreen}`,
           red:`${orbitRed}`
       },
       primary:{
           main:`${safBackground}`
       },
       secondary:{
           main:`${safaricomGreen}`
       },
       
    },
    typography:{
        fontFamily:"Montserrat",
        
    },
    align:{
        textAlign:"center",
        
    },
    card:{
        borderRadius: "4px",
        boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.16)",
        
        height: "41px",
        
    },
    contentRoamingText:{
        color:"#000000",
        fontFamily:"Montserrat",
        fontSize:"13px",
        // lineHeight:0.5,
        fontWeight:600
    }
})