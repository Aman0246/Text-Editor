import React, { useState } from 'react'

export default function Textarea() {
  const handleUpclick = () => {
    updateText(text.toUpperCase())
  }

  const handleLoclick = () => {
    updateText(text.toLowerCase())
  }

  const Reset = () => { updateText("") }

  const handleonchange = (e) => {
    updateText(e.target.value)
    console.log(e.target)
  }

  const Copy = () => {
    console.log("copy clicked")
    var text = document.getElementById("exampleFormControlTextarea1")
    console.log(text)
    console.log(text.value)
    navigator.clipboard.writeText(text.value)           // google type copy text to clipboard
  }

  const RemoveSpace = () => {
    console.log("Remove_space Button clicked")

    let a = text.replace(/ +/g, ' ');//             /\s+/g  is used to seslect all kind of spaces   /for starting patter (SPACE) + for one or more space(pattern)  /end of pattern    g is used for global (means not just for start)
    updateText(a)
  }





  const [text, updateText] = useState('Enter your text hear2')

  return (<>
    <div className="my-3">
      <h1>Enter your text below </h1>

      <textarea value={text} onChange={handleonchange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button type="button" className="btn btn-primary" onClick={handleUpclick} >Convert to Uppercase </button>
    <button type="button" className="btn btn-primary mx-3" onClick={handleLoclick}   >Convert to Lowercase</button>
    <button type="button" className="btn btn-primary " onClick={Reset}   >Reset</button>
    <button type="button" className="btn btn-primary mx-3" onClick={Copy} >Copy</button>
    <button type="button" className="btn btn-primary mx-3" onClick={RemoveSpace} >Remove_Space</button>
    <h2 className="my-2">Your text summary </h2>

    <p>{text.split(" ").length} words {text.length} Characters</p>;
    <h2>Preview</h2>
    <p>{text}</p>
  </>
  )
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