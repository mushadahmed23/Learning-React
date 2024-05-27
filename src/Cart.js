import React from "react";
import CartItem from "./CartItem";

const Cart=(props)=>{

const { products,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct}= props;

console.log(props)
return(
<div className='cart' >
{ products.map((product)=>{
return(
<CartItem
product={product}
key={product.id}
onIncreaseQuantity={onIncreaseQuantity}
onDecreaseQuantity={onDecreaseQuantity}
onDeleteProduct={onDeleteProduct}

></CartItem>)

})}


</div>
)

}

export default Cart;