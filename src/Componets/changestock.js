import React from 'react';
import axios, { Axios } from 'axios'
import { ItemsgetEdit } from './ItemsgetEdit';
export class changestock extends React.Component {
    constructor(){
        super();
        this.ReloadData=this.ReloadData.bind(this);
    }
    state = {
        items: []

    };
    componentDidMount() {
        axios.get('http://localhost:4000/items')
            .then(
                (response) => {
                    this.setState({ items: response.data})
                   
                })
            .catch(
                (error) => { console.log("Error in mount "+error) }
            )

    }
    render() {
        return (
            <div>
            <h1>Stock</h1>
            <h2>Here you can modifiy the stock </h2>
            <ItemsgetEdit items={this.state.items} ReloadData={this.ReloadData}></ItemsgetEdit>

        </div>
        
    );
    }
    ReloadData(){//Reloads data
        axios.get('http://localhost:4000/items')//Pulls from server
        .then(
            (response) => {
                this.setState({ items: response.data})
            })
        .catch(
            (error) => { console.log(error) }
        )
    }
}