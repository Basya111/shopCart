import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ProductList } from '../cmps/ProductList'
import { loadProducts, addToCart } from "../store/action/shopAction";
import { eventBusService } from '../services/eventBusService'


export class _ShopApp extends Component {
  state = {
    count: 0,
    pageIdx: 0,

  }

  async componentDidMount() {
    this.props.loadProducts()
  }

nextPage = () => {
    this.setState({ pageIdx: this.state.pageIdx + 1 }, () => {
      if (this.state.pageIdx * 6 >= this.props.products.length) {
        this.setState({ pageIdx: 0 })
      }
    })
}

prevPage = () => {
    this.setState({ pageIdx: this.state.pageIdx - 1 }, () => {
      if (this.state.pageIdx * 6 < 0) {
        this.setState({ pageIdx:Math.floor(this.props.products.length/6) })
      }
    })
}

  get itemsForDisplay(){
    const idxStart = this.state.pageIdx * 6;
    const { products } = this.props
    const items = products.slice(idxStart, idxStart + 6)
    console.log('items', items);
    return items
  }

  addToCart = (product) => {
    console.log('product...', product);
    this.props.addToCart(product)
    this.setState({count: this.state.count+1}, () => {
      eventBusService.emit('add-to-cart', this.state.count)
    })
    console.log(this.state.count);
  }

  render() {
    const { products } = this.props
    const itemsForDisplay = this.itemsForDisplay
    if (!products) return <div>Loading...</div>
    return (
      <div className="shop-app">
        <div className="flex space-between" style={{width: '78%'}}>
        <h2 className="prod-header">Our Products</h2>
        <button className="cart-btn"><Link to="/cart">Shopping Cart</Link></button>
        </div>
        {/* <div className="flex space-between"><h1>Our Products</h1> <p>My cart <span>{this.state.count}</span> items</p></div> */}
        <ProductList products={itemsForDisplay} addToCart={this.addToCart}/>
        <div className="btns flex space-between">
          <button onClick={this.prevPage}>Prev</button>
          <button onClick={this.nextPage}>Next</button>
        </div>
      </div>
    )
  }
}

const mapGlobalStateToProps = (state) => {
  return {
    products: state.shopModule.products,
    cartProducts: state.shopModule.cartProducts
  }
}
const mapDispatchToProps = {
  loadProducts,
  addToCart
}

export const ShopApp = connect(mapGlobalStateToProps, mapDispatchToProps)(_ShopApp)