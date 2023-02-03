export type PostItState = {
    currentNote: string, // sync this value to a input field in the component
    allNotes: string[] 
}

export type SetCurrentNoteAction = {type:"SET_CURRENT_NOTE", payload:string};
export type AddNoteAction = {type:"ADD_NOTE"};
export type ClearNotesAction = {type:"CLEAR_NOTES"};
export type PostItAction = SetCurrentNoteAction |  AddNoteAction | ClearNotesAction


export function postItReducer(state: PostItState, action: PostItAction): PostItState{

    let newState: PostItState = JSON.parse(JSON.stringify(state));

    switch(action.type){
        case "SET_CURRENT_NOTE":{
            newState.currentNote = action.payload;
            return newState;
        }
        case "ADD_NOTE":{
            newState.allNotes.push(newState.currentNote);
            return newState;
        }
        case "CLEAR_NOTES":{
            newState.allNotes = [];
            return newState;
        }
    }
}