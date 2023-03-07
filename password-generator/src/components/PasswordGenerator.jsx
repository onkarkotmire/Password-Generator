import React from "react";


const PasswordGenerator = ({
  handelText,
  setHandelText,
  copied,
  setCopied,
}) => {
  return (
    <>
      <div
        className="passwordGenerator"
        style={{
          display: "flex",
          justifyContent:"space-between",
          alignItems: "center",
          height: "35px",
          marginTop: "2%"
        }}
      >
        <input
          type="text"
          value={handelText}
          onChange={(e) => {
            setHandelText(e.target.value);
          }}
          style={{
            backgroundColor: "rgb(233,236,239)",
            color: "black",
            fontSize: "1rem",
            outline: "none",
            width: "85%",
            height: "100%",
            padding: "0.7rem",
            border:"none"

          }}
        />
        <button
          style={
            copied
              ? {
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "yellow",
                  color: "red",
                  fontSize: ".9rem",
                  fontWeight: "600",
                  boxShadow: "2px 2px 3px red",
                  width: "15%",
                  height: "100%"
                }
              : {
                  padding: ".5rem 1rem",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "rgb(23,162,184)",
                  fontSize: ".9rem",
                  fontWeight: "600",
                  width: "15%",
                  height: "100%"
                }
          }
          onClick={() => {
            if (handelText.length > 0) {
              console.log("handelText", handelText);
              navigator.clipboard.writeText(handelText);
              setCopied(true);
              setInterval(() => {
                setCopied(false);
              }, 2000);
            }
          }}
        >
          {copied ? "Copied" : "Copy"}

        </button>
      </div>
    </>
  );
};

export default PasswordGenerator;