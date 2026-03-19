import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
//information will be get service
function PostCard({ $id, title, featuredimage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4'>
                <div className='w-full justify-centre mb-4'></div>
                <img src={appwriteService.getFilePreview(featuredimage)} alt={title}
                    className='rounded-xl' />
            </div>
            <h2
                className='text-xl font-bold'>{title}</h2>
        </Link>
    )
}
// post id and img id will be with each post
export default PostCard
