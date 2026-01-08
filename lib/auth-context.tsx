import  { createContext, useContext } from "react";
import { Models } from "react-native-appwrite";

type AuthContextType={
    user:Models.User<Models.Preferences>|null;
    signUp:(email:string,password:string)=>Promise<void>;
    signIn:(email:string,password:string)=>Promise<void>;

};



const AuthContext=createContext(undefined)

export function AuthProvider({children}:{children:React.ReactNode}){
  return <></>;
}

export function useAuth(){
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}