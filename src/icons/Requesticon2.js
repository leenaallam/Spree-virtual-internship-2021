import { ReactComponent as Requestnotchecked } from "./notcheckedrequest.svg";
import { useHistory } from "react-router";
const Requesticon2 = (props) => {
  const history = useHistory();
  return (
    <div className="requesticon">
      <Requestnotchecked />

      <div className="requestname">
        <h1 onClick={() => history.push("/requests")}> Requests</h1>
      </div>
    </div>
  );
};

export default Requesticon2;
