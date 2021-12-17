import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

export class AddItem extends React.Component {
    constructor() {
        super();
        this.AddItem = this.AddItem.bind(this);
        this.HandleNameChange = this.HandleNameChange.bind(this);
        this.HandlePriceChange = this.HandlePriceChange.bind(this);
        this.HandleStockChange = this.HandleStockChange.bind(this);
        this.HandleImageChange = this.HandleImageChange.bind(this);
        this.state = {
            Name: '',
            Price: '',
            Stock: 0,
            Image: '',
        }

    }

    //Updates name
    HandleNameChange(event) {
        this.setState({
            Name: event.target.value
        })
    }

    //Updates price
    HandlePriceChange(event) {
        this.setState({
            Price: event.target.value
        })
    }

    //Updates Stock
    HandleStockChange(event) {
        this.setState({
            Stock: event.target.value
        })
    }

    //Updates image
    HandleImageChange(event) {
        this.setState({
            Image: event.target.value

        })
    }

    //Sends new item info to server
    AddItem(event) {
        event.preventDefault();
        const newItem = {
            Name: this.state.Name,
            Price: this.state.Price,
            Stock: this.state.Stock,
            Image: this.state.Image
        }
        axios.post('http://localhost:4000/additem', newItem).then((res) => {
            alert(res.data)
        })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        //checks if user is loged in
        if (window.sessionStorage.getItem("Admin") != "true") {
            return (
                <div>
                    <h1>You are not loged in</h1>
                </div>
            )
        }
        return (
            <div className="container">

                <h1>Add new item</h1>
                <Card>
                    <Card.Body>
                        <form onSubmit={this.AddItem}>
                            <div className='form-group'>
                                <label>Item Name</label>
                                <input type='text' className='form-control' value={this.state.Name}
                                       onChange={this.HandleNameChange}></input>
                            </div>
                            <div className='form-group'>
                                <label>Price</label>
                                <input type='text' className='form-control' value={this.state.Price}
                                       onChange={this.HandlePriceChange}></input>
                            </div>
                            <div className='form-group'>
                                <label>Stock</label>
                                <input type='text' className='form-control' value={this.state.Stock}
                                       onChange={this.HandleStockChange}></input>
                            </div>
                            <div className='form-group'>
                                <label>Image</label>
                                <input type='text' className='form-control' value={this.state.Image}
                                       onChange={this.HandleImageChange}></input>
                            </div>
                            <br/>
                            <div className='form-group'>
                                <input type='submit' value='Add Item' className='btn btn-primary'></input>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}