import React, {Component} from 'react';
import axios from 'axios';
export class Login extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.state = {
       Username: '',
        Password: '',

    }

}
  onChangeUsername(para) {
    this.setState({
        Username: para.target.value
    })
}
onChangePassword(para) {
    this.setState({
        Password: para.target.value
    })
}
Submit(para) {
const LoginInfo={
  Username:this.state.Username,
  Password:this.state.Password,

}
axios.put('http://localhost:4000/api/logininfo/'+this.state.Username,LoginInfo).then((res)=>{
console.log(res);//Server response
})
.catch((err)=>{
console.log(err);//Server Error
});
}
render() {
return (
  <div className='App'>
     <h1>This is admin login </h1>
  <form onSubmit={this.onSubmit}>
    <div className='form-group'>
      <label>
        <p>Username</p>
        <input type="text" className='form-control' value={this.state.Username} onChange={this.onChangeUsername}/>
      </label>
      </div>
      <div className='form-group'>
      <label>
        <p>Password</p>
        <input type="password"className='form-control' value={this.state.Password} onChange={this.onChangePassword} />
      </label>
      </div>
      <div className='form-group'>
        <button type="submit">Submit</button>
      </div>
      
    </form>
    </div>
);
}
}
