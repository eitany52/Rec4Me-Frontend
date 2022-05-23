import React from "react";
import '../../../App.css';
import Button from '@material-ui/core/Button';
import LoginIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import bcrypt from 'bcryptjs'
import Navbar from "../../navbar/Navbar";

export default class LogIn extends React.Component {

    render() {
        return (
            <>
            < Navbar />
            <div className="register-container" ref={this.props.containerRef}>
                <h1 className="sign-in">LOGIN</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                        <div className="form-group">
                            <input type="text" name="email" placeholder="Email" onChange={this.handleChange} required/>
                        </div>
                        <div className="form-group">
                            <input type="text" name="companyPassword" placeholder="Password" onChange={this.handleChange} required/>
                        </div>
                        <div className="registerbtn">
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
