import React, {Component} from 'react';
import axios, {Axios} from 'axios';
import {ItemsgetView} from './ItemGetView';
import {Link} from "react-router-dom";

export class HomePage extends Component {
    constructor() {
        super();
        this.ReloadRecords=this.ReloadRecords.bind(this);
    }

    state = {
        items: []

    };

    componentDidMount() {
        axios.get('http://localhost:4000/items')
            .then(
                (response) => {
                    this.setState({items: response.data})

                })
            .catch(
                (error) => {
                    console.log("Error in mount " + error)
                }
            )

    }

    render() {
        //No Item in stock tell user to add new one
        if (this.state.items==0){
            return (
                <div>
                    <h1>Nothing in stock!</h1>
                    <Link to={"/changestock"} className="btn btn-primary">Add more stock</Link>
                </div>
            )
        }
        return(
            <div>

            <h1>What we currently have in store</h1>

            <ItemsgetView items={this.state.items} ReloadRecords={this.ReloadRecords}></ItemsgetView>
        </div>)

    }
    //Reloads records
    ReloadRecords(){
        axios.get('http://localhost:4000/items')
            .then(
                (response) => {
                    this.setState({ items: response.data})
                })
            .catch(
                (error) => { console.log(error) }
            )
    }
}