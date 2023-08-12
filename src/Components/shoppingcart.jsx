import React, { Component } from 'react';
import Product from './product';

const ShoppingCart = props => {
    return ( <React.Fragment>
        <h1>
            Shopping cart
        </h1>
        <button className="btn btn-secondary btn-sm m2 col-1" onClick={props.onReset}>Reset</button>
        {
            props.products.map (product => (
                <Product key={product.id}
                 product={product}
                 onDelete={props.onDelete}
                 onIncrement={props.onIncrement}
                 onDecrement={props.onDecrement}/>
            ))
        }
    </React.Fragment> );
}

export default ShoppingCart;