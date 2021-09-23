import Sidebar from "./Sidebar";
import Searchicon from "./Searchicon";
import { useState, useEffect, useRef } from "react";
import * as React from "react";
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};
const Toboxes = () => {
  const [name, setName] = useState("Leena");
  const [contactnumber, setNumber] = useState("01063695293");
  const [email, setEmail] = useState("leenaallam73@gmail.com");
  const [location, setLocation] = useState("Cairo");
  const [address, setAddress] = useState("5th settlement");
  const [description, setDescription] = useState("Black");
  const [edit, setEdited] = useState(false);

  console.log(edit);
  const edited = () => {
    setEdited(true);
  };
  let domNode = useClickOutside(() => {
    setEdited(false);
  });
  const handleChange = (event) => {
    setName(event.target.value);
  };
  const handleChange1 = (event) => {
    setNumber(event.target.value);
  };
  const handleChange2 = (event) => {
    setEmail(event.target.value);
  };
  const handleChange3 = (event) => {
    setLocation(event.target.value);
  };
  const handleChange4 = (event) => {
    setAddress(event.target.value);
  };
  const handleChange5 = (event) => {
    setDescription(event.target.value);
  };

  return (
    <div>
      <Sidebar />
      <Searchicon />{" "}
      <div style={{ marginTop: "-2.9vh" }}>
        {" "}
        <input
          style={{
            border: "none",
            outline: "none",
            marginLeft: "370px",
          }}
          placeholder="Search by contact"
        />
      </div>
      <h1 className="titleboxes"> Requests </h1>
      <div className="textsediting" ref={domNode}>
        {" "}
        <div style={{ marginLeft: "2.5vw", marginTop: "4vh" }}>
          <label style={edit ? { color: "#0A47C4" } : { color: "#818e9b" }}>
            Name
          </label>
          {edit ? (
            <input
              type="text"
              value={name}
              onChange={handleChange}
              style={{ borderBottom: "1px solid #0A47C4" }}
            />
          ) : (
            <input
              style={{ borderBottom: "1px solid #d3d8dd" }}
              disabled={true}
              type="text"
              value={name}
              onChange={handleChange}
            />
          )}
        </div>
        <div style={{ marginLeft: "25.5vw", marginTop: "-4.9vh" }}>
          {" "}
          <label style={edit ? { color: "#0A47C4" } : { color: "#818e9b" }}>
            Contact numbers
          </label>
          {edit ? (
            <input
              type="text"
              value={contactnumber}
              onChange={handleChange1}
              style={{ borderBottom: "1px solid #0A47C4" }}
            />
          ) : (
            <input
              style={{ borderBottom: "1px solid #d3d8dd" }}
              disabled={true}
              type="text"
              value={contactnumber}
              onChange={handleChange1}
            />
          )}
        </div>
        <div style={{ marginLeft: "48.5vw", marginTop: "-4.9vh" }}>
          {" "}
          <label style={edit ? { color: "#0A47C4" } : { color: "#818e9b" }}>
            Email
          </label>
          {edit ? (
            <input
              type="text"
              value={email}
              onChange={handleChange2}
              style={{ borderBottom: "1px solid #0A47C4" }}
            />
          ) : (
            <input
              style={{ borderBottom: "1px solid #d3d8dd" }}
              disabled={true}
              type="text"
              value={email}
              onChange={handleChange2}
            />
          )}
        </div>
        <div style={{ marginLeft: "2.5vw", marginTop: "5vh" }}>
          {" "}
          <label style={edit ? { color: "#0A47C4" } : { color: "#818e9b" }}>
            Location
          </label>
          {edit ? (
            <input
              type="text"
              value={location}
              onChange={handleChange3}
              style={{ borderBottom: "1px solid #0A47C4" }}
            />
          ) : (
            <input
              style={{ borderBottom: "1px solid #d3d8dd" }}
              disabled={true}
              type="text"
              value={location}
              onChange={handleChange3}
            />
          )}
        </div>
        <div style={{ marginLeft: "25.5vw", marginTop: "-4.9vh" }}>
          {" "}
          <label style={edit ? { color: "#0A47C4" } : { color: "#818e9b" }}>
            Address
          </label>
          {edit ? (
            <input
              type="text"
              value={address}
              onChange={handleChange4}
              style={{ borderBottom: "1px solid #0A47C4" }}
            />
          ) : (
            <input
              style={{ borderBottom: "1px solid #d3d8dd" }}
              disabled={true}
              type="text"
              value={address}
              onChange={handleChange4}
            />
          )}
        </div>
        <div style={{ marginLeft: "48.5vw", marginTop: "-4.9vh" }}>
          {" "}
          <label
            style={edit ? { color: "#0A47C4" } : { color: "#818e9b" }}
            className="titless"
          >
            Description
          </label>
          {edit ? (
            <input
              type="text"
              value={description}
              onChange={handleChange5}
              style={{ borderBottom: "1px solid #0A47C4" }}
            />
          ) : (
            <input
              style={{ borderBottom: "1px solid #d3d8dd" }}
              disabled={true}
              type="text"
              value={description}
              onChange={handleChange5}
            />
          )}
        </div>
        <div
          style={{
            marginLeft: "69vw",
            marginTop: "-17.5vh",
            cursor: "pointer",
          }}
          onClick={edited}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.71582 10.5V13H3.24314L10.6971 5.62662L8.16974 3.12662L0.71582 10.5ZM12.6515 3.69329C12.9144 3.43329 12.9144 3.01329 12.6515 2.75329L11.0745 1.19329C10.8116 0.933291 10.387 0.933291 10.1242 1.19329L8.89087 2.41329L11.4182 4.91329L12.6515 3.69329Z"
              fill="#0A47C4"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Toboxes;
