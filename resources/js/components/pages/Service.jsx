import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Service({item}) {
    const { slug } = useParams();
    const [service, setService] = useState([]);

    useEffect(() => {
        axios.get(`/api/fetchservice/${slug}`).then(res => {
            if(res.status === 200)
            {
                setService(res.data.service)
                // setLoading(false);
            }
        })
    },[slug]);

    return (
        <>
        {service.map((item) => (
            <>
            <div className='container-fluid p-0'>
                <img src={`/public/images/banners/${item.banner}`} alt="banner" width="100%"/>
            </div>
          <div key={item.id} className='container text-center pt-5 pb-4'>
            <div className='row'>
            <div className='col-md-5 mb-4'>
                <div className='service-photo-bg'>
                    <h4 className='bold mb-4'>100% HYGIENIC AND HEALTHY</h4>
                    <img src={'/public/images/services/'+item.image} alt="service" width="100%" />
                </div>
            </div>
            <div className='col-md-1'></div>
                <div className='col-md-6 text-justify'>
                    <h3 className='primary-clr bold'>{item.name}</h3>
                    <div dangerouslySetInnerHTML={{ __html: item.description}}></div>
                    
                    <div dangerouslySetInnerHTML={{ __html: item.short_desc}}></div>
                   
                </div>
          </div>
          </div>
          </>
        ))}
        </>
    )
}

export default Service
