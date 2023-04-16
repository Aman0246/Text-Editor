import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function Textarea(props) {
  const handleUpclick = () => {
    updateText(text.toUpperCase());
  };

  const handleLoclick = () => {
    updateText(text.toLowerCase());
  };

  const Reset = () => {
    updateText("");
  };

  const handleonchange = (e) => {
    updateText(e.target.value);
    console.log(e.target);
  };

  const Copy = () => {
    console.log("copy clicked");
    var text = document.getElementById("exampleFormControlTextarea1");
    console.log(text);
    console.log(text.value);
    navigator.clipboard.writeText(text.value); // google type copy text to clipboard
  };

  const RemoveSpace = () => {
    console.log("Remove_space Button clicked");

    let a = text.replace(/ +/g, " "); //             /\s+/g  is used to seslect all kind of spaces   /for starting patter (SPACE) + for one or more space(pattern)  /end of pattern    g is used for global (means not just for start)
    updateText(a);
  };

  const dark = () => {
    console.log("darked clicked");
    if (light.backgroundColor == "white") {
      darkbtn({ color: "white", backgroundColor: "black" });
      updateTex("Light Mode");
    } else if (light.backgroundColor == "black") {
      darkbtn({ color: "black", backgroundColor: "white" });
      updateTex("Dark Mode");
    }
  };
  const [light, darkbtn] = useState({
    backgroundColor: "white",
    color: "black",
  });

  const [text, updateText] = useState("Enter your text hear2");
  const [tex, updateTex] = useState("Dark Mode");
  return (
    <>
      <div style={{color:props.setlight==='light'?"black":"white", backgroundColor:props.setlight==="light"?"white":"black"}}>
        <div className="my-3" style={{color:props.setlight==='light'?"black":"white", backgroundColor:props.setlight==="light"?"white":"black"}}>
          <h1>Enter your text below </h1>

          <textarea
          style={{color:props.setlight==='light'?"black":"white", backgroundColor:props.setlight==="light"?"white":"black"}}

            value={text}
            // style={light}
            onChange={handleonchange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <div >
        <button
          style={{color:props.setlight==='light'?"blue":"white", backgroundColor:props.setlight==="light"?"white":"blue"}}
          type="button"
          className="btn btn-primary"
          onClick={handleUpclick}
        >
          Convert to Uppercase{" "}
        </button>
        <button
          style={{color:props.setlight==='light'?"blue":"white", backgroundColor:props.setlight==="light"?"white":"blue"}}
          type="button"
          className="btn btn-primary mx-3"
          onClick={handleLoclick}
        >
          Convert to Lowercase
        </button>
        <button
           style={{color:props.setlight==='light'?"blue":"white", backgroundColor:props.setlight==="light"?"white":"blue"}}
          type="button"
          className="btn btn-primary "
          onClick={Reset}
        >
          Reset
        </button>
        <button
            style={{color:props.setlight==='light'?"blue":"white", backgroundColor:props.setlight==="light"?"white":"blue"}}
          type="button"
          className="btn btn-primary mx-3"
          onClick={Copy}
        >
          Copy
        </button>
        <button
             style={{color:props.setlight==='light'?"blue":"white", backgroundColor:props.setlight==="light"?"white":"blue"}}
          type="button"
          className="btn btn-primary mx-3"
          onClick={RemoveSpace}
        >
          Remove_Space
        </button>
      </div>
          
    
        <div style={{color:props.setlight==='light'?"black":"white", backgroundColor:props.setlight==="light"?"white":"black"}}>
        <h2 style={{color:props.setlight==='light'?"black":"white", backgroundColor:props.setlight==="light"?"white":"black"}} className="my-2">Your text summary </h2>

        <p style={{color:props.setlight==='light'?"black":"white", backgroundColor:props.setlight==="light"?"white":"black"}}>
          {text.split(" ").length} words {text.length} Characters
        </p></div>
        <h2 style={{color:props.setlight==='light'?"black":"white", backgroundColor:props.setlight==="light"?"white":"black"}}>Preview</h2>
        <p style={{color:props.setlight==='light'?"black":"white", backgroundColor:props.setlight==="light"?"white":"black"}}>{text}</p>
      </div>
    </>
  );
}
// ================================Comment for Myself======================================================================
// .split("aurgument ")=> array join opposite .......it just split according to argument and make an array  (give more one)

// var a ="aman kashyap hello"
// let b= a.split(" ").length
// console.log(b)
// ==================================
// var a ="aman kashyap hello"
// let b= a.length
// console.log(b)
