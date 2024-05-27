
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
          qty:1,
      },
      {   id:2,
          price:99,
          title:'Watch',
          qty:4
      },
      {
          id:3,
          price:2999,
          title:'Televison',
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
  

render(){
const{ products }=this.state;

return (
<div className="App">
  <Navbar></Navbar>
  <Cart
  products={products}
  onIncreaseQuantity={this.handleIncreaseQuantity}
  onDecreaseQuantity={this.handleDecreaseQuantity}
  onDeleteProduct={this.handleDeleteProduct}
  
  

  ></Cart>
</div>
);

}
}

export default App;
