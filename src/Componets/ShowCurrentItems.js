import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

export class ShowCurrentItems extends React.Component {
    constructor() {
        super();
        this.Buyone = this.Buyone.bind(this);
        this.state = {
            Name: '',
            Price: '',
            Stock: 0,
            Image: '',
        }

    }

    componentDidMount() {
        axios.put('http://localhost:4000/items/' + this.props.item._id)
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

    Buyone(e) {
        const newItem = {
            Name: this.state.Name,
            Price: this.state.Price,
            Stock: this.state.Stock - 1,
            Image: this.state.Image,
            _id: this.state._id
        }
        axios.put('http://localhost:4000/items/' + this.state._id, newItem).then((res) => {
            console.log(res);
        })
    }

    render() {
        return (
            <div class="container">

                <Card>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.item.Image} width="200" height="200"></img>
                            <Card.Header><h4>{this.props.item.Name}</h4></Card.Header>
                            <p>{this.props.item.Stock}</p>
                            <p>$ {this.props.item.Price}</p>
                        </blockquote>
                    </Card.Body>
                    <Button variant="danger" onClick={this.Buyone}>Buy 1</Button>
                </Card>


            </div>

        );
    }
}