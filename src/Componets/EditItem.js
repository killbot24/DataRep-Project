import React from 'react';
import axios from 'axios';

export class EditItem extends React.Component {
    constructor() {
        super();
        this.Submit = this.Submit.bind(this);
        this.HandleNameChange = this.HandleNameChange.bind(this);
        this.HandlePriceChange = this.HandlePriceChange.bind(this);
        this.HandleStockChange = this.HandleStockChange.bind(this);
        this.HandleImagechange = this.HandleImagechange.bind(this);
        this.state = {
            Name: '',
            Price: '',
            Stock: '',
            Image: '',
        }

    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        axios.put('http://localhost:4000/items/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    _id: response.data._id,
                    Name: response.data.Name,
                    Image: response.data.Image,
                    Stock: response.data.Stock,
                    Price: response.data.Price
                })
            })
            .catch((error) => {
                console.log(error + " Error in mount")
            });//Shows error
    }

    //Called on change of value
    HandleNameChange(e) {
        this.setState({
            Name: e.target.value
        })
    }

    //Called on change of value
    HandlePriceChange(e) {
        this.setState({
            Price: e.target.value
        })
    }

    //Called on change of value
    HandleStockChange(e) {
        this.setState({
            Stock: e.target.value
        })
    }

    //Called on change of value
    HandleImagechange(e) {
        this.setState({
            Image: e.target.value
        })
    }

    //Called on AddItem
    Submit(e) {
        e.preventDefault();
        const newItem = {
            Name: this.state.Name,
            Price: this.state.Price,
            Stock: this.state.Stock,
            Image: this.state.Image,
            _id: this.state._id
        }
        axios.put('http://localhost:4000/items/' + this.state._id, newItem).then((res) => {
            console.log(res);
        })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className='App'>
                <h1>Add new item</h1>
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
                               onChange={this.HandleImagechange}></input>
                    </div>
                    <div className='form-group'>
                        <input type='submit' value='Add Item' className='btn btn-primary'></input>
                    </div>
                </form>

            </div>
        );
    }
}