import { ReactComponent as Dashboardlogo } from "./dashboardlogo.svg";
const Dashboardicon = () => {
  return (
    <div className="dashboardd">
      <div className="dashboardicon">
        <Dashboardlogo />
      </div>
      <div className="dashboardname">
        <h1> Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboardicon;
