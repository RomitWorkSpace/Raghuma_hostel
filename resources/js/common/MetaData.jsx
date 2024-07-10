import React from 'react'
import { Helmet } from 'react-helmet';

function MetaData({title, keywords, meta_desc}) {
    return (
        <>
        <Helmet>
            <title>{ title }</title>
            <meta name="keywords" content={ keywords } />
            <meta name="description" content={ meta_desc } />
        </Helmet>
        </>
    )
}

export default MetaData
