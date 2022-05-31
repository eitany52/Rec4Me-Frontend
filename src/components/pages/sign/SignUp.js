import React from "react";
import '../../../App.css';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import Navbar from "../../navbar/Navbar";
import { useNavigate  } from 'react-router-dom';

export default function Checking() {
    const [companyID, setCompanyID] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [companyPassword, setCompanyPassword] = React.useState('');
    const [compName, setCompName] = React.useState('');
    const [domain, setDomain] = React.useState('');
    const [establishment, setEstablishment] = React.useState('');
    const [occupation, setOccupation] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [size, setSize] = React.useState('');
    const [numOfCeo, setNumOfCeo] = React.useState('');
    const [numOfManagers, setNumOfManagers] = React.useState('');
    const [numOfEmployees, setNumOfEmployees] = React.useState('');
    const [systemUsed, setSystemUsed] = React.useState('');
    const navigate = useNavigate();

    function handleSubmit(Event) {
        Event.preventDefault();
        if(companyID != '' && companyPassword != ''){
            var hashedPass;
            hashedPass = bcrypt.hashSync(companyPassword,5, (err,hash)=>{
              if(!err){
                hashedPass = hash;
              }
            });
      
            axios.post('/sign-up', {
                companyID: companyID,
                email: email,
                companyPassword: hashedPass,
                compName: compName,
                domain: domain,
                establishment: establishment,
                occupation: occupation,
                location: location,
                size: size,
                numOfCeo: numOfCeo,
                numOfManagers: numOfManagers,
                numOfEmployees: numOfEmployees,
                systemUsed: systemUsed})
              .then(res =>{
                  console.log(res);
                    if(res.status === 200){
                        navigate("/log-in");
                    }else if (res.status === 400){
                        console.log("duplicate ID");
                    }
            }).catch(err =>{
                    // console.log("duplicate ID");
                    // console.log(err);
            });
        }  
    }
        return (
            <>
            <Navbar />
            <div className="register-container" >
                <h1 className="sign-up">SIGN UP</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="company id">Company ID : </label>
                            <input
                                type="number" 
                                name="companyID" 
                                placeholder="Company id" 
                                value={companyID}
                                onChange={(e) => setCompanyID(e.target.value)}
                                required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email : </label>
                            <input
                                type="text" 
                                name="email" placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password : </label>
                            <input
                               type="password"
                               name="companyPassword" 
                               placeholder="Password"
                               value={companyPassword}
                               onChange={(e) => setCompanyPassword(e.target.value)}
                               required/>
                        </div>
                            <div className="form-group">
                            <label htmlFor="organization name">Organization's name : </label>
                            <input 
                               type="text"
                               name="compName" 
                               placeholder="Organization's name"
                               value={compName} 
                               onChange={(e) => setCompName(e.target.value)}
                               required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="organization domain">Organization's domain : </label>
                            <input type="text" 
                               name="domain" 
                               placeholder="Organization's domain"
                               value={domain} 
                               onChange={(e) => setDomain(e.target.value)}
                               required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date of establishment">Date of establishment : </label>
                            <input type="date"
                               name="establishment" 
                               placeholder="Date of establishment of the company" 
                               value={establishment} 
                               onChange={(e) => setEstablishment(e.target.value)}
                               required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="occupation">The organization is local or global : </label>
                            <input type="text"
                               name="occupation" 
                               placeholder="Local or Global" 
                               value={occupation} 
                               onChange={(e) => setOccupation(e.target.value)}
                               required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">The organization’s location : </label>
                            <input type="text" 
                               name="location" 
                               placeholder="The organization’s location" 
                               value={location} 
                               onChange={(e) => setLocation(e.target.value)} 
                               required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="organization size">Organization’s size : </label>
                            <input type="number" 
                               name="size" 
                               placeholder="Organization’s size" 
                               value={size} 
                               onChange={(e) => setSize(e.target.value)} 
                               required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="num of ceo">Number of CEOs and Deputy CEOs : </label>
                            <input type="number" 
                               name="numOfCeo" 
                               placeholder="Number of CEOs and Deputy CEOs" 
                               value={numOfCeo} 
                               onChange={(e) => setNumOfCeo(e.target.value)} 
                               required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="amount of managers">Amount of managers : </label>
                            <input type="number"
                               name="numOfManagers"
                               placeholder="Amount of department heads&team leaders" 
                               value={numOfManagers} 
                               onChange={(e) => setNumOfManagers(e.target.value)} 
                               required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Amount of employees">Amount of regular employees : </label>
                            <input type="number" 
                               name="numOfEmployees" 
                               placeholder="Amount of regular employees" 
                               value={numOfEmployees} 
                               onChange={(e) => setNumOfEmployees(e.target.value)} 
                               required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="organization system used">Organization’s operation system used : </label>
                            <input type="text" 
                               name="systemUsed" 
                               placeholder="Organization’s operation system used" 
                               value={systemUsed} 
                               onChange={(e) => setSystemUsed(e.target.value)} 
                               required/>
                        </div>
                        <div className="registerbtn">
                            <Button type="submit" endIcon={<SendIcon />} color="primary" variant="contained">
                              Sign Up
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
            </>
        );
}
