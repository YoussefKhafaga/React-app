import React, { Component } from 'react';
import ShoppingCart from './shoppingcart';
import NavBar from './navbar';

class App extends Component {
    state = { products : [
        {id: 1, name: "burger", count: 2},
        {id: 2, name: "pizza", count:3},
        {id: 3, name: "fries", count:0}
    ] };

    handleIncrement = product => {
        var products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        products[index].count++;
        this.setState({products});
    }
    
    handleDecrement = product => {
        var products = [...this.state.products];
        const index = products.indexOf(product);
        products[index] = {...products[index]};
        products[index].count--;
        this.setState({products});
    }

    handleDelete = product => {
        var products = this.state.products.filter(p => p.id !== product.id);
        this.setState({products});
    }

    handleReset = () => {
        //clone
        var products = [...this.state.products];
        //edit
        products = products.map(p => {
            p.count = 0;
            return p;
        })
        //set state
        this.setState({products});
    }

    render() { 
        return (
            <React.Fragment>
                <NavBar productsCount={this.state.products.filter(p => p.count > 0).length} />
                    <main className="container">
                        <ShoppingCart
                        products={this.state.products}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onReset={this.handleReset}
                        onDelete={this.handleDelete} />    
                    </main>
            </React.Fragment>
        );
    }
}
 
export default App;