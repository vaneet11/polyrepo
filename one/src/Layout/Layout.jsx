import React from 'react'
import Footer from '../LayoutComponents/Footer'
import Header from '../LayoutComponents/Header'

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}
