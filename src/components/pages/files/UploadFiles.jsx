import "./UploadFiles.css";
import Sidebar from "../../sidebar/SideBarForAdmin";
import Topbar from "../../topbar/TopBarForAdmin";
import Button from '@material-ui/core/Button';


export default function UploadFiles() {
    return (
      <>
          <Topbar />
          <div className="container">
              <Sidebar />
              <div className="summery">
              <div className="uploadContainer">
                <h3 className="h3header">Add here the files:</h3> <br />
                <label>
                  <input className="inputButton" type="file" accept="/*" id="contained-button-file" />
                  <Button className="buttonStyle" type="file" variant="contained" color="primary" component="span">
                    Upload
                  </Button>
                </label>
              </div>
          </div>
      </div>
      </>
    );
  }
  