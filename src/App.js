import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home/Home';
import SignUp from './components/pages/sign/SignUp';
import Login from './components/pages/sign/Login';
import Summery from './components/pages/summery/Summery';
import UserList from './components/pages/users/Users';
import UploadFiles from './components/pages/files/UploadFiles';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' element= {<Home />}/>
        <Route path='/sign-up' element= {<SignUp />} />
        <Route path='/log-in' element= {<Login />} />
        <Route path='/admin' element= {<Summery />} />
        <Route path='/users' element= {<UserList />} />
        <Route path='/files' element= {<UploadFiles />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
