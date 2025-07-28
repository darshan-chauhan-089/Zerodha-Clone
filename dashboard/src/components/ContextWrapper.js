import { useParams } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import { DataContextProvider } from "../context/DataContext";

function ContextWrapper({children}) {
    
    const {userId} = useParams();
    console.log("userId context wrapper: ", userId);

    return ( 
        <AuthContextProvider userIdFromUrl={userId}>
            <DataContextProvider userIdFromUrl={userId}>
                {children}
            </DataContextProvider>
        </AuthContextProvider>
     );
}

export default ContextWrapper;