
import './App.css';
import CartItem from './CartItem'
import Cart from './Cart' 
import Navbar from './Navbar'
import React from 'react';

class App extends React.Component
{
constructor(){

super();
this.state={
products:[
    {
        id:1,
        price:999,
        title:'Phone',
        img:'https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2024/01/1-10.jpg?ssl=1',
        qty:1,
    },
    {   id:2,
        price:99,
        title:'Watch',
        img:'https://media.istockphoto.com/id/1359180038/photo/wristwatch.jpg?s=612x612&w=0&k=20&c=AWkZ-gaLo601vG5eiQcsjYRjCjDxZdGL7v-jWvvAjEM=',
        qty:4
    },
    {
        id:3,
        price:2999,
        title:'Televison',
        img:'https://images.samsung.com/is/image/samsung/in-full-hd-tv-te50fa-ua43te50fakxxl-frontblack-231881877?$650_519_PNG$',
        qty:3
    }
]
}; 

}
handleIncreaseQuantity=(product)=>{
    
const {products}=this.state;
const index= products.indexOf(product);

products[index].qty+=1;

this.setState({
    products:products
})
}

handleDecreaseQuantity=(product)=>{
    
    const {products}=this.state;
    const index =products.indexOf(product);
    
    
    if( products[index].qty>0){
        products[index].qty-=1;
    }
    
    this.setState({
        products:products
    })
}

handleDeleteProduct=(id)=>{
const {products}=this.state;
// const index = products.indexOf(product);
// console.log(index)
// products.splice(index,1);
const items = products.filter((item)=>item.id!==id)

this.setState({
    products:items
})

}

getCartCount=()=>{
    const{products}=this.state;
    let count=0;
    products.map((product)=>{
        count=count+product.qty;
    })
    return count;
}

getCartTotal=()=>{
    const{products}=this.state;
    let total=0;
    products.map((product)=>{
        total=total+product.qty*product.price;
    })
    return total;

    
}

render(){
const{ products }=this.state;

return (
<div className="App">
<Navbar
 getCartCount={this.getCartCount()}></Navbar>
<Cart
products={products}
onIncreaseQuantity={this.handleIncreaseQuantity}
onDecreaseQuantity={this.handleDecreaseQuantity}
onDeleteProduct={this.handleDeleteProduct}


></Cart>
<div style={{fontWeight:"bold",padding:"10px 10px"}}>TOTAL:{this.getCartTotal()}</div>
</div>
);

}
}

export default App;
