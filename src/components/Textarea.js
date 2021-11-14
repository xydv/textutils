import React, { useState } from 'react'

export default function Navbar(props) {

  const upclicked = () => {
    let newuptext = text.toUpperCase();
    setText(newuptext);
  }

  const lowclicked = () => {
    let newlowtext = text.toLowerCase();
    setText(newlowtext);
  }

  const ionchange = (event) => {
    setText(event.target.value);
  }

  const cleartext = () => {
    setText("");
  }

  const copyclip = () => {
    navigator.clipboard.writeText(text);
  }

  const [text, setText] = useState("");
  return (
    <>
      <div className="mb-3">
        <h2 className={`my-4 text-${props.mode === "light" ? "dark" : "light"}`}>Input Your Text To Analyze!</h2>
        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter Text Here!" onChange={ionchange} value={text} rows="10"></textarea>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2 btn-sm" onClick={upclicked} >Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2 btn-sm" onClick={lowclicked} >Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2 btn-sm" onClick={cleartext} >Clear</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2 btn-sm" onClick={copyclip} >Copy Text</button>
      </div>
      <div className="container">
        <h2 className={`my-4 text-${props.mode === "light" ? "dark" : "light"}`}>Some More Things About Your Text!</h2>
        <p className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>Characters :- <span className="badge bg-secondary">{text.length}</span></p>
        <p className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>Words :- <span className="badge bg-secondary">{text.split(" ").filter((element) =>{return element.length !== 0}).length}</span></p>
        <p className={`my-3 text-${props.mode === "light" ? "dark" : "light"}`}>Time To Read :- <span className="badge bg-secondary">{60 * 0.008 * text.split(" ").length} Seconds</span></p>
      </div>
	  <div className="container">
	  <h2 className={`my-4 text-${props.mode === "light" ? "dark" : "light"}`}>Turn Into Voice!<span className="badge bg-info mx-3">New</span></h2>
	  <audio 
		  src={`https://www.google.com/speech-api/v1/synthesize?text=${text}&enc=mpeg&lang=hi-in&speed=0.4&client=hi-language-tts&use_google_only_voices=1`} 
		  id="audio1" 
		  controls="controls">Your browser does not support HTML5 Audio!
	  </audio>
	  </div>
    </>
  )
}