import React, {useState} from 'react';
import "./UploadFiles.css";
import Sidebar from "../../sidebar/SideBarForAdmin";
import Topbar from "../../topbar/TopBarForAdmin";
import Button from '@material-ui/core/Button';
import axios from 'axios';

function UploadFiles() {
    const [file, setFile] = useState()

    function handleChange(event) {
      setFile(event.target.files[0])
    }

    function handleSubmit(event) {
      event.preventDefault()
      const url = 'http://localhost:3000/uploadFile';
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileName', file.name);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      axios.post(url, formData, config).then((response) => {
        console.log(response.data);
      });
  
    }

    return (
      <>
          <Topbar />
          <div className="container">
              <Sidebar />
              <div className="summery">
              <div className="uploadContainer">
                <form onSubmit={handleSubmit}>
                  <h3 className="h3header">Add here the csv file of the workers:</h3> <br />
                  <input className="inputButton" type="file" onChange={handleChange} accept="/*" id="contained-button-file" />
                  <Button className="buttonStyle" type="submit" variant="contained" color="primary" component="span">
                    Upload
                  </Button>
                </form>
              </div>
          </div>
      </div>
      </>
    );
  }
  export default UploadFiles;