import React from "react";

const CheckBox = ({ label, onchange }) => {
  const style = {
    marginTop: "0.3rem",
    padding: "1rem",
    fontSize: "22px",
    display:"flex",
    alignItems:"center",
    color: "color"
  };

  const labelStyle = {
    marginLeft: "1rem",
  };

  return (
    <>
      <div style={style}>
        <input
          style={{ width: "17px", height: "17px", border: "2px solid red" }}
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={() => {
            onchange();
          }}
        />
        <label style={labelStyle}>{label}</label>
      </div>
    </>
  );
};

export default CheckBox;