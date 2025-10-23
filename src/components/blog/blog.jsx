import React from 'react';
import { IoMdBookmark } from "react-icons/io";
const Blog = ({ blog, handleBookmark }) => {

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm ">
                <figure>
                    <img
                        src={blog.cover}
                        alt="Image" />
                    <p className='-translate-x-16 translate-y-18 '>Reading Time: {blog.reading_time}</p>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <div className="flex justify-between">
                        <h1 className='text-2xl'>{blog.author}</h1>
                        <img className='w-10' src={blog.author_img} alt="" />
                        <button onClick={() => handleBookmark(blog)}>  <IoMdBookmark  size={25} /></button>
                    </div>
                    <div className='flex gap-2'>
                        {blog.hashtags.map(hash => <span className=' text-md'>{hash}</span>)}
                    </div>
                    <div className="card-actions  justify-between">
                        <button className='btn btn-primary'>Bookmark</button>
                        <button className="btn btn-primary">Mark as read</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;