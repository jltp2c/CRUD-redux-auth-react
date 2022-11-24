import React from 'react'

function CommentCard({comment}) {
  return (
    <div className="comment-post">
        <h5>{comment.commentAuthor}</h5>
        <p>{comment.text}</p>
    </div>
  )
}

export default CommentCard