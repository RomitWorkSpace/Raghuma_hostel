import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BlogBanner from 'imgPath/banners/blog-banner.jpeg'

function BlogDetail({item}) {
    const { slug } = useParams();
    const [blog, setBlog] = useState([]);

    useEffect(() => {
        axios.get(`/api/fetchblog/${slug}`).then(res => {
            if(res.status === 200)
            {
                setBlog(res.data.blog)
                // setLoading(false);
            }
        })
    },[slug]);

    return (
        <>
        {blog.map((item) => (
            <>
            <div className='container-fluid p-0'>
                <img src={ BlogBanner } width="100%" alt="blog" />
            </div>
          <div key={item.id} className='container text-center pt-5 pb-4'>
            <div className='row'>
            <div className='col-md-5 mb-4'>
                <div className='service-photo-bg'>
                    <img src={'https://brandaile.com/public/images/blogs/'+item.image} alt="service" width="100%" />
                </div>
            </div>
            <div className='col-md-1'></div>
                <div className='col-md-6 text-justify'>
                    <h3 className='primary-clr bold'>{item.name}</h3>
                    <div className='mt-4' dangerouslySetInnerHTML={{ __html: item.short_desc}}></div>
                   
                </div>
          </div>
            <div className='text-justify' dangerouslySetInnerHTML={{ __html: item.description}}></div>
          </div>
          </>
        ))}
        </>
    )
}

export default BlogDetail
