import {Navigate} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Loader from './Loader';

const ProtectedRoute = ({children}) => {
    const {user, token} = useAuth();
    if(!token){
        window.location.href = `${process.env.ZERODHA_CLONE}/login`;
    }

    return children;
}

export default ProtectedRoute;