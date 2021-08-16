import Nav from './Nav'
import Head from 'next/head'

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>My Blog</title>
                <meta keyword="My Blog powerd by Next js"></meta>
                <meta contents="My Blog powerd by Next js"></meta>
            </Head>
            <Nav />
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout
