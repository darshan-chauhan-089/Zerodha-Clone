import { useParams } from "react-router-dom";
import { AuthContextProvider } from "../context/AuthContext";
import { DataContextProvider } from "../context/DataContext";
import { GeneralContextProvider } from "../context/GeneralContext";

function ContextWrapper({children}) {
    
    const {userId} = useParams();
    console.log("userId context wrapper: ", userId);

    return ( 
        <AuthContextProvider userIdFromUrl={userId}>
            <DataContextProvider userIdFromUrl={userId}>
                <GeneralContextProvider>
                    {children}
                </GeneralContextProvider>
            </DataContextProvider>
        </AuthContextProvider>
     );
}

export default ContextWrapper;