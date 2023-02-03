import { type } from "os";
import React, { useReducer } from "react"
import { postItReducer, PostItState } from "./post-it-reducer"

const initialPostState: PostItState = {
    currentNote: "",
    allNotes: []
}


export function PostNote(){

    const [postState, dispatch] = useReducer(postItReducer, initialPostState);

    function handleSetCurrentNote(event:React.ChangeEvent<HTMLInputElement>){
        if(event.target.value.length >= 3){
            dispatch({type:"SET_CURRENT_NOTE",payload:event.target.value});
        }
    }

    function handleAddNote(){
        if(postState.currentNote.length < 3){
            alert("Must Have more than 3 characters");
        }
        else {
            dispatch({type: "ADD_NOTE"});
        }

    }

    function handleClearAllNotes(){
        dispatch({type:"CLEAR_NOTES"});
    }

    return <>

        <h1>Post-It Note Maker</h1>

        <input type="text" placeholder="Post Note Here" onInput={handleSetCurrentNote}/>
        <button onClick={handleAddNote}>Post!</button>
        <button onClick={handleClearAllNotes}>Clear All Notes</button>
        <br /><br /><br />

        <h2>Notes</h2>

        <ul>
            <li>Don't Forget to put in your time sheet. (This one isn't going away no matter how many times you press that clear button.)</li>
            {postState.allNotes.map(p =><li key={Math.random()}>{p}</li>)} 

        </ul>
    
    </>
}