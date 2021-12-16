import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card'

export class Login extends React.Component {
    constructor() {
        super();
        this.Login = this.Login.bind(this);
        this.HandleUsername = this.HandleUsername.bind(this);
        this.HandlePassword = this.HandlePassword.bind(this);

        this.state = {
            Username: '',
            Password: '',
        }

    }

    //Takes in username
    HandleUsername(e) {
        this.setState({
            Username: e.target.value
        })
    }

    //Takes in password
    HandlePassword(e) {
        this.setState({
            Password: e.target.value
        })
    }

    //Sends login info to server
    Login(e) {
        e.preventDefault();
        const loginInfo = {
            Username: this.state.Username,
            Password: this.state.Password
        }

        axios.put('http://localhost:4000/Login/' + this.state.Username, loginInfo).then((res) => {
            console.log(res.data);
            if (res.data == "Login") {//If login is successful
                window.sessionStorage.setItem("Admin", true);//Sets admin to true allowing user to access add item and change stock
                alert("You are now loged in you may use add item,change stock")
            } else { //Login failed
                alert(res.data);
            }
        })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {

        return (
            <div className="container">

                <h1>Login</h1>
                <Card>
                    <Card.Body>
                        <form onSubmit={this.Login}>
                            <div className='form-group'>
                                <label>Username</label>
                                <input type='text' className='form-control' value={this.state.Username}
                                       onChange={this.HandleUsername}></input>
                            </div>
                            <div className='form-group'>
                                <label>Password</label>
                                <input type='text' className='form-control' value={this.state.Password}
                                       onChange={this.HandlePassword}></input>
                            </div>

                            <br/>
                            <div className='form-group'>
                                <input type='submit' value='Login' className='btn btn-primary'></input>
                            </div>
                        </form>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}