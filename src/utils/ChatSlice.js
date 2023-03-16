import { createSlice } from "@reduxjs/toolkit";
import { LIVECHAT_OFFSET } from "./constants";


const ChatSlice = createSlice({
    name:'chat',
    initialState:{
        messages:[]
    },
    reducers:{
        addMessage: (state, action)=>{
            state.messages.splice(LIVECHAT_OFFSET, 1); 
            state.messages.unshift(action.payload);
        }
    }
});

export const {addMessage} = ChatSlice.actions;
export default ChatSlice.reducer;