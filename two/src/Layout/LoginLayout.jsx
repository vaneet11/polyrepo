import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function LoginLayout() {
    const token = localStorage.getItem('token')
    return token ? <Outlet /> : <Navigate to='/login' />
}
