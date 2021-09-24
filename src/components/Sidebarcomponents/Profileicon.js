import { ReactComponent as Profilelogo } from "../../icons/profileimage.svg";

const Profileicon = () => {
  return (
    <div className="profileicon">
      <Profilelogo />

      <div className="name">
        <h1>Ahmed Reda</h1>
      </div>

      <div className="code">
        <h2>#1253724 </h2>
      </div>
    </div>
  );
};

export default Profileicon;
