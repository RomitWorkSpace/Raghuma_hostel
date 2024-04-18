import React, { useEffect, useState } from 'react'
import BlogImg from 'imgPath/blog.png'
import axios from 'axios'
import { Link } from 'react-router-dom';

function BlogArea() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        axios.get(`/api/fetch_blogs`).then(res=>{
            if(res.status === 200)
            {
                setBlogs(res.data.blogs)
            }
        });
    }, []);

    var blogData = "";

    blogData = blogs.map( (item) => {
        return (
            <>
                <div className='col-md-3 mb-4'>
                        <div className='blog-wrapper'>
                            <Link to={`/blogs/${item.slug}`}>
                            <img src={`https://brandaile.com/public/images/blogs/${item.image}`} width="100%" alt="blog" style={{borderRadius: '8px 8px 0px 0px'}} className='rotate-in-2-fwd-cw' />
                            <div className='title-area text-center p-3'>
                                <h5>{item.title}</h5>
                            </div>
                            </Link>
                        </div>
                </div>
            </>
        )
    })

    return (
        <>
        <div className='container-fluid pt-5'>
            <h1 className='primary-clr lily-script text-center'>Latest Blog</h1>
            <div className='container pt-5'>
                <div className='row'>
                    { blogData }
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogArea
