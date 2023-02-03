import { postItReducer, PostItState } from "../post-it-reducer";


test("Set Note", ()=>{
    const postState: PostItState = {
        currentNote: "",
        allNotes: ["hello","hey there"]
    }
    const nextState = postItReducer(postState, {type: "SET_CURRENT_NOTE", payload:"how are you"})
    expect(nextState.currentNote).toBe("how are you");
    console.log(postState);
    console.log(nextState);
});

/*
test("Add Note Fail", ()=>{
    const postState: PostItState = {
        currentNote: "",
        allNotes: ["hello","hey there"]
    }
    const nextState = postItReducer(postState, {type: "ADD_NOTE"})
    expect(nextState.allNotes.length).toBe(2);
    console.log(postState);
    console.log(nextState);
});
*/
test("Add Note Passed", ()=>{
    const postState: PostItState = {
        currentNote: "hi!",
        allNotes: ["hello","hey there"]
    }
    const nextState = postItReducer(postState, {type: "ADD_NOTE"})
    expect(nextState.allNotes[2]).toBe("hi!");
    console.log(postState);
    console.log(nextState);
});


test("Clearing all Notes", ()=>{
    const postState: PostItState = {
        currentNote: "",
        allNotes: ["hello","hey there","hi!"]
    }
    const nextState = postItReducer(postState, {type: "CLEAR_NOTES"})
    expect(nextState.allNotes.length).toBe(0);
    console.log(postState);
    console.log(nextState);
});
