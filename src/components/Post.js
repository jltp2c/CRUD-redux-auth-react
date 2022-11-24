import React, { useState } from 'react'
import { doc, updateDoc } from "firebase/firestore";
import { db } from '../utils/firebaseConfig';
import Delete from './Delete'
import CommentPost from './CommentPost'

function Post({post}) {

  const [edit,setEdit] = useState(false)
  const [mess, setMess]= useState(null)

  const dateFormateur = (date)=>{
    const newDate = Math.floor((new Date() - new Date(date))/(1000*3600*24))

    if(newDate === 0){
      return "Aujourd'hui"
    }else if (newDate ===1){
      return "il y a 1 jour"
    }else{
      return "il y a " + newDate + " jours";
    }
  }

  const handleEdit = () =>{
    setEdit(false)
    if(mess){
     updateDoc(doc(db, 'posts', post.id), {msg : mess})
    }
  }

  return (
    <div className='post'>
      <div className="post-header">
        <div className="left-part">
          <div className="title">
            <span>{post.author[0]}</span>
            <h2>{post.author}</h2>
          </div>
          <h5>Posté le : {dateFormateur(post.date)}</h5>
        </div>
        
          <div className="right-part">
          <span onClick={()=> setEdit(!edit)}>
            <i className='fa-solid fa-pen-to-square'></i>
          </span>
          <Delete postId ={post.id}/>
          </div>
      
      </div>

      {edit? 
      <>
        <textarea 
          autoFocus 
          defaultvalue={mess? mess : post.msg} 
          onChange={(e)=>setMess(e.target.value)}></textarea> 
          <button className='edit-btn' onClick={() => handleEdit()}>Modifier message</button>
      </>
        :(<p>{mess? mess :post.msg}</p>
      )}
      <CommentPost post={post}/>
    </div>
  )
}

export default Post