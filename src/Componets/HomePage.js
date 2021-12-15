import React, {Component} from 'react';
import axios, {Axios} from 'axios';
import {ItemsgetView} from './ItemGetView';

export class HomePage extends Component {
    constructor() {
        super();

    }

    state = {
        items: []

    };

    componentDidMount() {
        axios.get('http://localhost:4000/items')
            .then(
                (response) => {
                  //  console.log(Object.keys(response.data).length);
                  // var json= response.data[Object.keys(response.data).length-1];

                    this.setState({items: response.data})

                })
            .catch(
                (error) => {
                    console.log("Error in mount " + error)
                }
            )

    }

    render() {
        return(
            <div className="Container">

            <h1>What we currently have in store</h1>

            <ItemsgetView items={this.state.items}></ItemsgetView>
        </div>)

    }
}