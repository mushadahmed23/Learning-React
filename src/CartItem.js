import React from "react";

const CartItem =(props)=>{

// increaseQuantity=()=>{
//     //1way for setting state
//     // this.setState({
//     //     qty:this.state.qty+1
//     // })

//     // 2nd way of setting state
//     // note:- set state is async in nature we need to use another call back func for doing sync task
//     // except promises and ajax  and render is called eve ry time
//     this.setState ((prevState)=>{
//         return{ qty:prevState.qty+1

//         };
//     });
// } // we are arrow function for binding
//     // this.increaseQuantity = this.increaseQuantity.bind(this)



// decreaseQuantity= ()=>{  
// this.setState((prevState)=>{
//     return{
        
//         qty:prevState.qty>0 ?prevState.qty-1:prevState.qty
    
// }

// });
// }
const { price,title,qty}=props.product; //object destructuring 
const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct}=props;



return (
    <div className="cart-item">
        <div className="left-block">
            <img alt='img' src={product.img} style={styles.image}/>
        </div>
        <div className="right-block">
            <div style={{fontSize:25}}>{title}</div>
            <div style={{color:"#777" }}>Rs {  price}</div>
            <div style={{color:"#777 "}}>Qty: {qty} </div>

            <div className="cart-item-actions">
                    <img alt="increase"
                    className="action-icons" 
                    src="https://www.svgrepo.com/show/526461/add-circle.svg"
                    // onClick={this.increaseQuantity.bind(this)}
                    onClick={()=>{onIncreaseQuantity(product)}}
                    />
                    <img alt="decrease" 
                    className="action-icons"
                    src="https://www.svgrepo.com/show/525444/minus-circle.svg"
                    onClick={()=>{props.onDecreaseQuantity(props.product)}}
                    />
                    <img alt="delete"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/128/9581/9581117.png"
                        onClick={()=>onDeleteProduct(product.id)}
                    /> 
            </div>
        </div>
    </div>
)
}

const styles={
image:{
height:110,
width:110,
borderRadius:4,

}
} 
export default CartItem;