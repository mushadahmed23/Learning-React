import React from "react";
class CartItem extends React.Component{

    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            qty:0,
            
        }
    }
    increaseQuantity=()=>{
        //1way for setting state
        // this.setState({
        //     qty:this.state.qty+1
        // })

        // 2nd way of setting state
        // note:- set state is async in nature we need to use another call back func for doing sync task
        // except promises and ajax  and render is called eve ry time
        this.setState ((prevState)=>{
           return{ qty:prevState.qty+1

           };
        });
    };   // we are arrow function for binding
       // this.increaseQuantity = this.increaseQuantity.bind(this)



       decreaseQuantity= ()=>{
        this.setState((prevState)=>{
            return{
              
                qty:prevState.qty>0 ?prevState.qty-1:prevState.qty
            
        }

        });
       }
    render(){
        const { price,title,qty}=this.state; //object destructuring 
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:"#777", }}>Rs {  price}</div>
                    <div style={{color:"#777 "}}>Qty: {qty} </div>
                    <div className="cart-item-actions">
                         <img alt="increase"
                          className="action-icons" 
                           src="https://www.svgrepo.com/show/526461/add-circle.svg"
                         // onClick={this.increaseQuantity.bind(this)}
                         onClick={this.increaseQuantity}
                          />
                         <img alt="decrease" 
                         className="action-icons"
                          src="https://www.svgrepo.com/show/525444/minus-circle.svg"
                          onClick={this.decreaseQuantity}
                          />
                         <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/9581/9581117.png"/> 
                    </div>
                </div>
            </div>
        )
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        backgroundColor:'red' 
    }
}
export default CartItem;