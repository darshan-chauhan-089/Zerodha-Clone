import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({children}) => {
    const {user, token} = useAuth();
    if(!token){
        window.location.href = `${process.env.REACT_APP_ZERODHA_CLONE}/login`;
    }

    return children;
}

export default ProtectedRoute;