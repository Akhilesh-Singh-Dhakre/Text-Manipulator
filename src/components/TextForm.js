import React, {useState} from 'react'


export default function TextForm(props) {
    const handleonchange = (event)=>{
        setText(event.target.value)
    }
    const handleupclick = ()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handlelowerclick = ()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
        <textarea className='form-control' value={text} onChange={handleonchange} id='mybox' rows="8"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleupclick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handlelowerclick}>Convert to Lowercase</button>
    </div>
    <div className='container my-3'>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p> 
        <h3>Preview</h3>
        <p>{text}</p>       
    </div>
    </>
  )
}
