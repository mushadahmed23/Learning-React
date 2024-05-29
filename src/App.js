
import './App.css';
import CartItem from './CartItem'
import Cart from './Cart' 
import Navbar from './Navbar'
import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'



class App extends React.Component
{
constructor(){

super();
this.state={
products:[],
loading:true

};}
componentDidMount() {
//     firebase.firestore().collection('products')
//         .get()
//         .then((snapshot) => {
           
// const products=snapshot.docs.map((doc)=>{
//     const data=doc.data();
//     data['id']=doc.id;

//     return data;
// })

// this.setState({products,loading:false})
//         })
// }

// onSnapshot for adding event listerner for any changes done in the firebase db
firebase.firestore().collection('products')
.onSnapshot((snapshot) => {
   
    const products=snapshot.docs.map((doc)=>{
    const data=doc.data();
    data['id']=doc.id;
    
    return data;
    })
    
    this.setState({products,loading:false})
    })
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
const{ products,loading }=this.state;

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
{loading && <h1>Loading products....</h1>}
<div style={{fontWeight:"bold",padding:"10px 10 px"}}>
{!loading && `TOTAL: ${this.getCartTotal()}`}</div>
</div>
);

}
}

export default App;
