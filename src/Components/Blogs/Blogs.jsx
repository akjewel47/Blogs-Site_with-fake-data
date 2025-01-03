import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {

const [blogs, setBlogs] = useState([])

useEffect(()=>{
    fetch('fake.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
} ,[])

    return (
        <div>
            <h2>blogs: {blogs.length}</h2>
        </div>
    );
};

export default Blogs;