import React from 'react'
import { Link } from 'react-router-dom'
let url='http://localhost:3000/'

function Blog({_id,title,body,user,image,createdAt}) {
    return (
        <div className="card" style={{width:'18rem'}}>
            <img src={url+image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">posted by {user} </p>
                    <Link to={`${_id}`} className="btn btn-primary">Read more...</Link>
                </div>
        </div>
    )
}

export default Blog
