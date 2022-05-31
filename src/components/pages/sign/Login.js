import React from "react";
import '../../../App.css';
import Button from '@material-ui/core/Button';
import LoginIcon from '@material-ui/icons/AccountCircle';
import axios from 'axios';
import Navbar from "../../navbar/Navbar";
import { ThemeProvider } from "@material-ui/core";
import { useNavigate  } from 'react-router-dom';

export default function LogIn(){
    const [companyID, setCompanyID] = React.useState('');
    const [companyPassword, setCompanyPassword] = React.useState('');
    const navigate = useNavigate();

    function handleSubmit(Event) {
        Event.preventDefault();
        if(companyID !== '' && companyPassword !== ''){
            axios.post('/log-in', {companyID: companyID, companyPassword: companyPassword}).then(res =>{
            localStorage.setItem('token', res.data.token);
            if(res.status === 200){
                navigate("/admin");
            }else if (res.status === 400){
                console.log("duplicate ID");
            }
            }).catch(err =>{
              console.log(err);
            });
        }  
    }
        return (
            <>
            < Navbar />
            <div className="register-container">
                <h1 className="sign-in">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <div className="form-group">
                            <input type="text"
                                name="companyID" 
                                placeholder="Company ID" 
                                value={companyID}
                                onChange={(e) => setCompanyID(e.target.value)}
                                required/>
                        </div>
                        <div className="form-group">
                            <input type="password"
                                name="companyPassword" 
                                placeholder="Password" 
                                value={companyPassword}
                                onChange={(e) => setCompanyPassword(e.target.value)}
                                required/>
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
