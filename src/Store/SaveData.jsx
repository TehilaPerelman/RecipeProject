import { createSlice } from "@reduxjs/toolkit";
const initvalue={  
    arr:[],
};

const SaveData=createSlice({
    name:"save",
    initialState:initvalue,
    reducers:{
        SavePerson(state, actions){
            state.arr.push(actions.payload); 
            console.log(...state.arr);
            
        },      

    }
})

export const {SavePerson} = SaveData.actions;
export default SaveData.reducer;
