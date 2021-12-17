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

    //On Componet load runs this.
    componentDidMount() {
        axios.put('http://localhost:4000/items/' + this.props.item._id) //Gets info from server saves it
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
                }
            );
    }

    //Removes 1 from record
    Buyone() {
        //Sets new stock (Other wise only work's one time)
        this.setState(
            {
                Stock: this.state.Stock - 1
            }
        )
        const newItem = {
            Name: this.state.Name,
            Price: this.state.Price,
            Stock: this.state.Stock,
            Image: this.state.Image,
            _id: this.state._id
        }
        console.log(this.state.Stock);
        axios.put('http://localhost:4000/items/' + this.state._id, newItem).then(() => { //Sends info to server
            this.props.ReloadRecords();//Reloads records
        })
            .catch((error) => {
                console.log(error + " Error in buyone")
            });
    }

    render() {
        //If stock is 0 do not render in homepage
        {
            if (this.props.item.Stock == 0) {
                return (
                    <div className="container"></div>
                )
            } else
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
                            <Button type="button" class="btn btn-dark" onClick={this.Buyone}>Buy 1</Button>
                        </Card>
                        <br/>


                    </div>

                );
        }
    }
}