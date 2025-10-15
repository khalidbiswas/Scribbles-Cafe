import React, { useEffect, useState } from 'react';
import Blog from '../blog/blog';
const Blogs = ({setBookmark}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data)
            )
    }, []
    )
    return (
        <div>
            <div>Total:{blogs.length}</div>
            {/* All blogs  */}
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2'>
                {blogs.map((blog) => <Blog setBookmark={setBookmark} key={blog.id} blog={blog}></Blog>)}
            </div>
        </div>
    );
};

export default Blogs;