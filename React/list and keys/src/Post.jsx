import React from 'react'

function Post(props) {
    const { userId, title, body } = props
    return (
        <div className="card container">
            <div className="card-header">
               <span className='fw-bold'> Title -</span> {title}
            </div>
            <div className="card-body">
                <p className="card-text"><span className='fw-bold'> Post Text -  </span>{body}</p>
                <p>posted by userId {userId}</p>
            </div>
        </div>
    )
}

export default Post
