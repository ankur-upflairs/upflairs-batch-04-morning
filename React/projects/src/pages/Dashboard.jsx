import React from 'react'
import { posts } from '../data'

function Dashboard() {

    let del = (id) => {
        console.log(id)
        let i = posts.findIndex(v => {
            console.log(v.id)
            return v.id == id
        })
        // console.log(i)
        posts.splice(i, 1)
    }

    return (
        <table className='table table-bordered table-light'>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Author</th>
                <th>options</th>
            </tr>
            {posts.map((post, i) => {
                return <tr>
                    <td>
                        <img src={post.image} alt="" width={'80px'} />
                    </td>
                    <td>{post.title}</td>
                    <td>{post.author}</td>
                    <td onClick={() => del(post.id)} style={{ cursor: 'pointer' }}>delete</td>
                </tr>
            })}
        </table>
    )
}

export default Dashboard
