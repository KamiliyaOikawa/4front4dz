import React from 'react';
import ProductsList from "../../components/Productslist/ProductsList";

class Products extends React.Component {

  constructor(props) {
    super(props);
    this.state = {products: [], input: ''}
  }

  getProducts = () => {
    this.setState({products: ["apple", 'orange', 'apricot']})
  }


  changeInput = (e) => {
    this.setState({input: e.target.value })
  }

  addProduct = (e) => {
    this.setState({
      products:
          [
            ...this.state.products,
            this.state.input
          ],
      input: ''
    })

  }

  delete = () => {
    this.setState({products: []})
  }


  render() {
    return (
        <div>
          <h1>Products</h1>
          <input type='text' value={this.state.input} onChange={this.changeInput}/>
          <button onClick={this.getProducts}>get products</button>
          <button onClick={this.addProduct}>add products</button>
          <button onClick={this.delete}>DELETE</button>
          <ProductsList productslist={this.state.products}/>
        </div>
    )
  }
}

export default Products;