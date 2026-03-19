import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'
//information will be get service
function PostCard({ $id, title, featuredimage }) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-xl p-4 h-full flex flex-col'>
                <div className='w-full flex justify-center mb-4 overflow-hidden rounded-xl aspect-video'>
                    <img
                        src={appwriteService.getFilePreview(featuredimage)}
                        alt={title}
                        className='object-cover w-full h-full hover:scale-105 duration-300'
                    />
                </div>
                <h2 className='text-xl font-bold line-clamp-2'>{title}</h2>
            </div>
        </Link>
    )
}
// post id and img id will be with each post
export default PostCard
