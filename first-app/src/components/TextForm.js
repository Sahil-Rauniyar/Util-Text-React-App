// import PropTypes from 'prop-types'

import React, { useEffect, useState } from 'react'

export default function TextForm(props) {

    const handleUpperClick = () => {
        // console.log("UpperCase Button was clicked ! "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        // setText("You have clicked on handleUpperClick");

        props.showAlert("Converted to upperCase! ", "Success")
    };

    const handleOnChange = (event) => {
        // console.log("On Change was clicked ! ")
        setText(event.target.value);
    };

    // added extra features by me (SAHIL); 
    const handleLowerClick = () => {
        // console.log("LowerCase button was clicked ! ");
        let newText2 = text.toLowerCase();
        setText(newText2);

        props.showAlert("Converted to lowerCase! ", "Success")
    };

    // const handleClearClick = () => {
    //     let clrText = "";
    //     setText(clrText)
    // }

    const handleClearClick = () => {
        setDeletedText(text); // Store current text before deleting
        setText(''); // Clear text
        props.showAlert("Texts are cleared ! ", "Success")
    };

    // const handleUndoClick = () => {
    //     let UndoText = text;
    //     setText(UndoText);
    // }

    const handleUndoClick = () => {
        setText(deletedText); // Restore deleted text
        // setDeletedText(''); // Clear deleted text history
        props.showAlert("Text has been undo! ", "Success")
    };

    // Handle Delete Text
    const handleHistory = () => {
        if (!isProtected) {
            setText(''); // Allow deletion only if not protected
        } else {
            //   alert('Text is protected and cannot be deleted!');
            alert("Do you want to show recent history !! ")
        }
        setIsProtected(deletedText);
        props.showAlert("Pressed on show recent history !", "Success")
    };

    const handleDeleteHistory = () => {
        // setText(deletedText);
        alert("Are you sure !! ")
        setIsProtected('');
        props.showAlert("Clicked to delete history ! ", "Success")
    };

    // const SecondDivStyle = () =>{
    //     divStyle=
    // }

    // useless way->  const borderStyle=()=>{
    //     borderRadius: '10px';
    //     marginTop: '10px';
    //     backgroundColor: 'pink';

    // }

    // const [divStyle, SetDivStylre] = useState({
    //     borderRadius: '10px',
    //     marginTop: '10px',

    // });

    const [text, setText] = useState("Enter text here ");
    const [deletedText, setDeletedText] = useState(''); // Store deleted text
    const [isProtected, setIsProtected] = useState(true); // State to protect text

    // text = "Sahil, Enter the text : " it is a wrong way to change the state or text ;

    // setText("Enter New Text");  or 

    useEffect(() => {    //Correct way to change the state  or text ;
        setText("Enter new Text ");
    }, []);

    return (
        <>

            <div style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <label htmlhmtlhtmlFor="myBox" className="form-label"><h2>{props.heading}</h2></label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==='light'?'dark':'light', color: props.mode === 'dark' ? '#042743' : 'black' }} id='myBox' rows="8" ></textarea>
                </div>

                <button className='btn btn-primary mx-2' onClick={handleUpperClick}> Convert to UpperCase </button>
                <button className='btn btn-danger mx-2' onClick={handleClearClick}> Clear Text </button>
                <button className='btn btn-primary mx-2 ' onClick={handleLowerClick} id='lowerbtn'> Convert to LowerCase </button>
                <button className='btn btn-success mx-2 ' onClick={handleUndoClick}> Undo Text </button>
                <button className='btn btn-success mx-2 ' onClick={handleHistory}> Show Recent History </button>
                <button className='btn btn-danger mx-2 ' onClick={handleDeleteHistory}> Delete History </button>

            </div>

            <div className="container ny-3 bg-light " id='secondDiv'>
                <h1>Analysis Entered Data Summary : </h1>
                <p>{text.trim().split(/\s+/).filter(Boolean).length} Words and {text.length} Characters !!</p>
                <p>{0.008 * text.trim().split(/\s+/).filter(Boolean).length} Minutes to read this words !</p>
                <h4>Preview Data </h4>
                <p>{text.length>0?text:"Enter somethings in the textbox to preview it !!"}</p>
            </div>

            <div className="history" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Recent History :</h2>
                <p>{isProtected}</p>
            </div>

        </>
    )
}
