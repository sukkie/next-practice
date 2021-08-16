import React from 'react'
import Head from 'next/head'

const HeadInfo = ({title, keyword, contents}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta keyword={keyword}></meta>
                <meta contents={contents}></meta>
            </Head>
        </div>
    )
}

HeadInfo.defaultProps = {
    title : 'My Blog',
    keyword : 'Blog Powered by Next js ',
    contents : 'practice next js',
}

export default HeadInfo
