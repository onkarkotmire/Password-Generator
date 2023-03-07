import React from 'react'

const ButtonComp = ({onclick, generatedPass}) => {
  function name() {
    return "lime"
  }
  return (
    <>
    <div style={{ marginTop:"2rem",}} >
        <button style={
            generatedPass
              ? {
                  padding: ".5rem 1rem",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: name(),
                  color: "red",
                  fontSize: "20px",
                  fontWeight: "600",
                  boxShadow: "2px 2px 3px red",
                  width: "100%"
                }
              : {
                  padding: ".5rem 1rem",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "rgb(19,132,150)",
                  fontSize: "20px",
                  fontWeight: "600",
                  boxShadow: "2px 2px 3px rgb(19,132,150)",
                  color: "White",
                  width: "100%"
                }
          } onClick={()=>{
                onclick();
        }}>{generatedPass?"Password Generated" :"Generate Password"}</button>
    </div>
    
    </>
  )
}

export default ButtonComp