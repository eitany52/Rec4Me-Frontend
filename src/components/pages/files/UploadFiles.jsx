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

                  {/* first style of input */}
                  {/* <h3 className="h3header">Add here the csv file of the workers:</h3> <br />
                  <label>
                    <input className="inputButton" type="file" onChange={handleChange} id="contained-button-file" />
                    <Button className="buttonStyle" type="submit" variant="contained" color="primary" component="span">
                      Upload
                    </Button>
                  </label> */}

                  {/* second style of input */}
                  <input className="custom-file-input" type="file" onChange={handleChange}/>

                  {/* third style of input */}
                  {/* <label class="uploadLabel">
                      <i class="fas fa-file-upload"></i> 
                      <input type="file" className="uploadButton" onChange={handleChange}/>
                      Upload
                  </label> */}

                </form>
              </div>
          </div>
      </div>
      </>
    );
  }
  export default UploadFiles;