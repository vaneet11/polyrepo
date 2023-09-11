export const jwt_secret = "AirBook_JS"


export const isLoggedIn = () => {
    const tokenExist = localStorage.getItem('token')
    return tokenExist ? true : false
}