import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({children}) => {
return (
    <div className='layout'>
        <Head>
            <title>Rowdy LA</title>
            <link rel='icon'/>
        </Head>
        <header>
            <NavBar/>
        </header>
        <main>
            {children}
        </main>
        <footer>
            <Footer/>
        </footer>
    </div>

)
}

export default Layout