import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Navbar, Nav, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {HomePage} from './Componets/HomePage';
import {AddItem} from './Componets/AddItem';
import {changestock} from './Componets/changestock';
import {EditItem} from './Componets/EditItem';
import {Login} from "./Componets/Login";

class App extends Component {
    render() {
        return (

            <Router>
                <div className="App">
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/">Shop</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/Login">Login</Nav.Link>
                                <Nav.Link href="/AddItem">Add Item</Nav.Link>
                                <Nav.Link href="/changestock">Change Stock</Nav.Link>

                            </Nav>
                        </Container>
                    </Navbar>
                    <br/>
                    <Switch>
                        <Route path='/' component={HomePage} exact/>
                        <Route path='/AddItem' component={AddItem} exact/>
                        <Route path='/changestock' component={changestock} exact/>
                        <Route path='/Login' component={Login} exact/>
                        <Route path='/EditItem/:id' component={EditItem} exact/>
                    </Switch>


                </div>
            </Router>

        );
    }
}

export default App;
