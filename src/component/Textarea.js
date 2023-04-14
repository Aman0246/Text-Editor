import React ,{useState} from 'react'

export default function Textarea() {
  const handleUpclick=()=>{
  updateText(text.toUpperCase()) }

  const handleLoclick=()=>{
    updateText(text.toLowerCase())
  }
  const Reset=()=>{ updateText("")}

  const handleonchange=(e)=>{updateText(e.target.value)
    console.log(e.target)}


     const [text,updateText]= useState('Enter your text hear2')
  return (<>
    <div className="mb-3">
      <h1>Enter your text below </h1>
    
      <textarea value={text} onChange={handleonchange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button type="button" className="btn btn-primary"  onClick={handleUpclick} >Convert to Uppercase </button>
    <button type="button" className="btn btn-primary mx-3"  onClick={handleLoclick}   >Convert to Lowercase</button>
    <button type="button" className="btn btn-primary "  onClick={Reset}   >Reset</button>
    <h2>Your text summery </h2>
    <p>{text.split(" ").length} words {text.length} Characters</p>
  </>
  )
}
