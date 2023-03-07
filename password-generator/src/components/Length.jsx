import React from "react";


const Length = ({ label, onchange }) => {
  return (
    <>
      <div style={{width: "25%", height: "100%",}}>
        <label style={{ color: "black" }}>{label}</label>
        <input
          style={{
            backgroundColor: "transparent",
            color: "black",
            fontWeight: "600",
            outline: "none",
            border: "1px solid black",
            fontSize: "18px",
            width: "100%",
            height: "100%"
          }}
          type="number"
          name=""
          id=""
          onChange={(e) => {
            onchange(e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Length;