import React, { useEffect, useState } from 'react';

const Blogs = () => {
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
        </div>
    );
};

export default Blogs;