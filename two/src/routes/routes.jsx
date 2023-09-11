import Flight from "../Components/Flight";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import LoginLayout from "../Layout/LoginLayout";


const token = localStorage.getItem('token');
console.log(token)

const routes = [
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            { path: '/', element: 'home222' },
            { path: '/home', element: 'home3333' },
            { path: 'Signup', element: <SignUp />, },
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <LoginLayout />,
        children: [
            { path: '/dashboard', element: 'Dashboard' }
        ]
    },
    {
        path: '/flights',
        element: <LoginLayout />,
        children: [
            { path: '/flights', element: <Flight /> }
        ]
    }
]



export default routes