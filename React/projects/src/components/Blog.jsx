import React from 'react'
import { Link } from 'react-router-dom'

function Blog({id,title,body,author,image,date}) {
    return (
        <div className="card" style={{width:'18rem'}}>
            <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">posted by {author} {date}</p>
                    <Link to={`${id}`} className="btn btn-primary">Read more...</Link>
                </div>
        </div>
    )
}

export default Blog
