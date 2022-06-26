// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import "./Contact.css";
import React from "react";

const Contact = (props) => {
  return (
    <>
      <div className="divContact">
        <img
          className="photo"
          src={props.data.photo}
          alt={props.data.name}
        ></img>
        <div className="divContactColumn">
          <div className="divNama">{props.data.name}</div>
          <div className="divPhone">{props.data.phone}</div>
          <div className="divEmail">{props.data.email}</div>
        </div>
      </div>
    </>
  );
};

export default Contact;
