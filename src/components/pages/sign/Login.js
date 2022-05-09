import React from "react";
import '../../../App.css';
import Button from '@material-ui/core/Button';
import LoginIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import Navbar from "../../navbar/Navbar";
import { ThemeProvider } from "@material-ui/core";

export default class LogIn extends React.Component {
    
    constructor(props) {
        super(props);
        // this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    
    handleChange(Event) {
        this.setState({[Event.target.name]: Event.target.value})
    }

    handleSubmit(Event) {
        Event.preventDefault();
        if(this.state.companyID !== '' && this.state.companyPassword !== ''){
            axios.post('/log-in', {companyID: this.state.companyID, companyPassword: this.state.companyPassword}).then(res =>{ 
            localStorage.setItem('token', res.data.token);
            }).catch(err =>{
              console.log(err);
            });
        }  
    }

    render() {
        return (
            <>
            < Navbar />
            <div className="register-container" ref={this.props.containerRef}>
                <h1 className="sign-in">Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                        <div className="form-group">
                            <input type="text" name="companyID" placeholder="Company ID" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="companyPassword" placeholder="Password" onChange={this.handleChange} required/>
                        </div>
                        <div className="loginbtn">
                            {/* <button type="submit" class="btn btn-primary">Sign In</button> */}
                            <Button type="submit" endIcon={<LoginIcon />} color="primary" variant="contained">
                              Sign in
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
            </>
        );
    }
}

  //     constructor(props) {
    //         super(props);
    //         // this.state = {value: ''};
    //         this.handleChange = this.handleChange.bind(this);
    //         this.handleSubmit = this.handleSubmit.bind(this);
    //     }

    // handleChange(Event) {
    //     this.setState({[Event.target.name]: Event.target.value})
    // }

    // handleSubmit(Event) {
    //     Event.preventDefault();
    //     if(this.state.companyID != '' && this.state.companyPassword != ''){
    //         var hashedPass;
    //         hashedPass = bcrypt.hashSync(this.state.companyPassword,5, (err,hash)=>{
    //           if(!err){
    //             hashedPass = hash;
    //           }
    //         });
      
    //         axios.post('/sign-up', {companyID: this.state.companyID,
    //         email: this.state.email,
    //                               companyPassword: hashedPass,
    //                               compName: this.state.compName,
    //                               domain: this.state.domain,
    //                               establishment: this.state.establishment,
    //                               occupation: this.state.occupation,
    //                               location: this.state.location,
    //                               size: this.state.size,
    //                               numOfCeo: this.state.numOfCeo,
    //                               numOfManagers: this.state.numOfManagers,
    //                               numOfEmployees: this.state.numOfEmployees,
    //                               systemUsed: this.state.systemUsed}).then(res =>{
    //         console.log(res);
    //         }).catch(err =>{
    //           console.log(err);
    //         });
    //     }  
    // }

    // render() {
    //     return (
    //         <>
    //         < Navbar />
    //         <div className="register-container" ref={this.props.containerRef}>
    //             <h1 className="sign-in">LOGIN</h1>
    //             <form onSubmit={this.handleSubmit}>
    //                 <div className="form">
    //                     <div className="form-group">
    //                         <input type="text" name="email" placeholder="Email" onChange={this.handleChange} required/>
    //                     </div>
    //                     <div className="form-group">
    //                         <input type="text" name="companyPassword" placeholder="Password" onChange={this.handleChange} required/>
    //                     </div>
    //                     <div className="registerbtn">
    //                         {/* <button type="submit" class="btn btn-primary">Sign In</button> */}
    //                         <Button type="submit" endIcon={<LoginIcon />} color="primary" variant="contained">
    //                           Sign in
    //                         </Button>
    //                     </div>
    //                 </div>
    //             </form>
    //         </div>
    //         </>
    //     );
    // }