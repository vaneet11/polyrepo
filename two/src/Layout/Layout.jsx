import React from 'react'
import Footer from '../LayoutComponents/Footer'
import Header from '../LayoutComponents/Header'

// Hello it is for one 
export default function Layout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}
