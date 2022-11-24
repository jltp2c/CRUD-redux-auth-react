import { deleteDoc, doc} from 'firebase/firestore'
import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePosts } from '../feature/postSlice';
import { db } from '../utils/firebaseConfig';

function Delete({postId}) {
const dispatch = useDispatch();
    const handleDelete = () => {
        deleteDoc(doc(db, 'posts', postId)).then(()=>{
          dispatch(deletePosts(postId))
        })
    }
  return (
    <span className='delete' onClick={e => handleDelete()}>
        <i className='fa-solid fa-trash-can'></i>
    </span>
  )
}

export default Delete