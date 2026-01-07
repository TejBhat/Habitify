import  { createContext, useContext } from "react";

interface AuthContextType {
    signOut: () => void;
}

const AuthContext=createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({children}:{children:React.ReactNode}){
    const signOut = () => {
        // TODO: Implement sign out logic
    };

    return (
        <AuthContext.Provider value={{ signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}