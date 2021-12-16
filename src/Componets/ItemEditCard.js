import React from 'react';
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import axios from 'axios';

export class ItemEditCard extends React.Component {
    constructor() {
        super();
        this.DeleteItems = this.DeleteItems.bind(this);
    }

    DeleteItems(e) { //Sends id to be deleted
        e.preventDefault();
        axios.delete('http://localhost:4000/items/' + this.props.item._id)
            .then(() => {
                this.props.ReloadRecords();//Reloads Records
            })
            .catch((error) => {
                console.log(error + " error in delete")
            });
    }

    render() { //Lists out record in card
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
                    <div class="btn-group" role="group">
                        <Link to={"/EditItem/" + this.props.item._id} className="btn btn-primary">Edit</Link>
                        <Button variant="danger" onClick={this.DeleteItems}>Delete</Button>
                    </div>
                </Card>
                <br/>


            </div>

        );
    }
}