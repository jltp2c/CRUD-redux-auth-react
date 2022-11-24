import { createSlice, current } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name : "posts",
    initialState : {
        posts : null,
    },
    reducers : {
        getPosts : (state, {payload}) =>{
            state.posts = payload
        },
        addPosts : (state,{payload}) =>{
            state.posts.push(payload) 
        },
        deletePosts : (state,{payload}) =>{
            state.posts=  state.posts.filter((pic)=> pic.id !== payload)
        },
        addComment : (state, {payload}) => {
            state.posts = state.posts.map((post)=>{
                if(post.id === payload[0]){
                    return {
                     ...post,
                     comments : payload[1]
                    }
                     
                }else{
                    return current(post)
                }
                }
                
            )
           
        }
    }
  
})

export const {addComment} = postSlice.actions;
export const {deletePosts} = postSlice.actions
export const {addPosts}= postSlice.actions
export const {getPosts} = postSlice.actions;
export default postSlice.reducer