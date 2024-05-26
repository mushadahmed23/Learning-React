import React from "react";
import CartItem from "./CartItem";

const Navbar =(props)=>{ 

return(
<div style={styles.nav}  >
<div style={styles.cartIconContainer}>
    <img 
    style={styles.cartIcon}
    alt="img her"
    src= 'https://cdn-icons-png.flaticon.com/128/3144/3144456.png'></img>
</div>
<span style={styles.cartCount}>3</span>
</div>
)

}


const styles={

    cartIcon:{
        height:32,
        marginRight:15,

    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'flex-end',
        alignItems:'center'
    },

    cartIconContainer:{
        position:'relative',
       
        
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'0px 6px',
        position:'absolute',
        right:0,
        top:5,
        
    }

}
export default Navbar;