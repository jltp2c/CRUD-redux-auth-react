import React, { useRef } from 'react'
import {addDoc, collection, getDocs} from "firebase/firestore"
import { db } from '../utils/firebaseConfig';
import { useDispatch } from 'react-redux';
import { addPosts, getPosts } from '../feature/postSlice';



function CreatePost({uid, displayName}) {
  
const msg = useRef()
const dispatch = useDispatch()

  const handlePost = async(e) =>{
    e.preventDefault();
    const data={
      author :  displayName,
      id : uid,
      msg : msg.current.value,
      comments : null,
      date : Date.now(),
    }
    console.log(data)
    await addDoc(collection(db, 'posts'), data).then(() =>{
      dispatch(addPosts(data))
      getDocs(collection(db, 'posts')).then((res)=> 
      dispatch(getPosts(res.docs.map((doc)=>({...doc.data(), id : doc.id})))))
      msg.current.value = "";
    })
   
  }
  return (
    <div className='new-post-modal'>
        <form onSubmit={(e)=> handlePost(e)}>
            <textarea placeholder='message...' ref={msg}></textarea>
            <input type="submit" value="envoyer" />
        </form>
    </div>
  )
}

export default CreatePost