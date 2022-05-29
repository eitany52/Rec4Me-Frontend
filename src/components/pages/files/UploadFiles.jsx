import "./UploadFiles.css";
import Sidebar from "../../sidebar/SideBarForAdmin";
import Topbar from "../../topbar/TopBarForAdmin";
import Button from '@material-ui/core/Button';
import axios from 'axios';


export default function UploadFiles() {

 function uploadFile(file){
    console.log(file.target.files);
    let reader = new FileReader();
    reader.readAsDataURL(file.target.file[0]);
    
    reader.onload=(file_reader)=>{
      const data = {file:file_reader.target.result};
      axios.post('uploadfile',data).then(res=>{

        console.log(res);

      }).catch(err =>{
        console.log(err);
      })
    }
  }
    return (
      <>
          <Topbar />
          <div className="container">
              <Sidebar />
              <div className="summery">
              <div className="uploadContainer">
                <h3 className="h3header">Add here the files:</h3> <br />
                <div >
                  <label>
                    <input className="inputButton" type="file" accept="/*" id="contained-button-file" />
                    <Button className="buttonStyle" type="file" variant="contained" color="primary" component="span" onChange={(file)=> uploadFile(file)}>
                      Upload
                    </Button>
                  </label>
                </div>
              </div>
          </div>
      </div>
      </>
    );
  }
  