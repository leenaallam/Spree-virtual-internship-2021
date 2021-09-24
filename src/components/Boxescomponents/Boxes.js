import { useHistory } from "react-router";
const Boxes = () => {
  const history = useHistory();
  return (
    <div className="boxes">
      <div className="boxesicon">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.361084 0.361328V5.47938H1.12497V15.6391H14.875V5.47938H15.6389V0.361328H0.361084ZM10.2916 9.52799H5.70831V8.00022H10.2916V9.52799ZM14.1111 4.18077H1.88886V1.88911H14.1111V4.18077Z"
            fill="#C2CFE0"
          />
        </svg>
      </div>
      <div className="boxesname">
        <h1 onClick={() => history.push("/boxes")}> Boxes</h1>
      </div>
    </div>
  );
};

export default Boxes;
