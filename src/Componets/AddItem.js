import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'
export class AddItem extends React.Component {//Returns below text when called
    constructor() {
        super();
        this.Submit = this.Submit.bind(this);
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

    HandleNameChange(e) {
        this.setState({
            Name: e.target.value
        })
    }

    HandlePriceChange(e) {
        this.setState({
            Price: e.target.value
        })
    }

    HandleStockChange(e) {
        this.setState({
            Stock: e.target.value
        })
    }

    HandleImageChange(e) {
        this.setState({
            Image: e.target.value
        })
    }

    Submit(e) {
        e.preventDefault();
        alert("Item:" + this.state.Name + " " + this.state.Price + " " + this.state.Stock);
        const newItem = {
            Name: this.state.Name,
            Price: this.state.Price,
            Stock: this.state.Stock,
            Image: this.state.Image
        }
        axios.post('http://localhost:4000/additem', newItem).then((res) => {
            console.log(res);
        })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        console.log(window.sessionStorage.getItem("Admin"));
        if (window.sessionStorage.getItem("Admin")!="true"){
            return(
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
                <form onSubmit={this.Submit}>
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