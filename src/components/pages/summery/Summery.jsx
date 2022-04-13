import Chart from "../../chart/Chart";
import Sidebar from "../../sidebar/SideBarForAdmin";
import Topbar from "../../topbar/TopBarForAdmin";
import "./Summery.css";
import { questionnaire1,
         questionnaire2,
         questionnaire3,
         questionnaire4,
         questionnaire5 } from "../../../dummyData";

export default function Home() {
  return (
    <>
        <Topbar />
        <div className="container">
            <Sidebar />
            <div className="summery">
            <Chart data={questionnaire1} title="Questionnaire 1" />
            <Chart data={questionnaire2} title="Questionnaire 2" />
            <Chart data={questionnaire3} title="Questionnaire 3" />
            <Chart data={questionnaire4} title="Questionnaire 4" />
            <Chart data={questionnaire5} title="Questionnaire 5" />
        </div>
    </div>
    </>
  );
}
