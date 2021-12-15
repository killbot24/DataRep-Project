import React from 'react';
import axios, { Axios } from 'axios'
import { ItemsgetEdit } from './ItemsgetEdit';
import {Link} from "react-router-dom";
export class changestock extends React.Component {
    constructor(){
        super();
        this.ReloadRecords=this.ReloadRecords.bind(this);
    }
    state = {
        items: []

    };
    //runs when page is opened
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
        //Checks if user is logged in
        console.log(window.sessionStorage.getItem("Admin"));
        if (window.sessionStorage.getItem("Admin")!="true"){
            return(
                <div>
                    <h1>You are not loged in</h1>
                </div>
            )
        }
        //No Item in stock tell user to add new one
        if (this.state.items==0){
            return (
                <div>
                    <h1>Add a item in!</h1>
                    <Link to={"/AddItem"} className="btn btn-primary">Add Item</Link>
                </div>
            )
        }
        return (
            <div>
            <h1>Stock</h1>
            <h2>Here you can modifiy the stock </h2>
            <ItemsgetEdit items={this.state.items} ReloadRecords={this.ReloadRecords}></ItemsgetEdit>

        </div>
        
    );
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