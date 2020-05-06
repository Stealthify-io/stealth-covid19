export const isLogin = () => {
    if (localStorage.getItem('token')) {
        return true;
    }

    return false;
}

export const currentUser = () =>{

    if (localStorage.getItem('user')) {
        return localStorage.getItem('user');
    }

    return [];
}