import React, { Component } from 'react';

class Product extends Component {
    //state = { Name: this.props.product.name,
    //Count: this.props.product.count } 
    getClasses(){
        return this.props.product.count <= 0 ? 'badge text-bg-warning m-2' : 'badge text-bg-primary m-2';
    }

    render() { 
        return (
        <div className='row'>
            <div className='col-1'><span className='m-2'>{this.props.product.name}</span></div>
        <div className='col'><span className={this.getClasses()}>{this.props.product.count}</span>
        <button onClick ={() => this.props.onIncrement(this.props.product)} className='btn btn-primary m-2'>+</button>
        <button onClick ={() => this.props.onDecrement(this.props.product)} className='btn btn-primary m-2'>-</button>
        <li className="fa-solid fa-trash m-2" onClick={() => this.props.onDelete(this.props.product)}></li></div>
        </div>
        );
    }
}
 
export default Product;