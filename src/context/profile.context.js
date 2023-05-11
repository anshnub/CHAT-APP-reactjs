import { createContext, useContext, useEffect, useRef, useState } from "react";
import { auth, database } from "../misc/firebase";



const ProfileContext  = createContext();

export const ProfileProvider = ({children}) => {
    const [profile,setProfile] = useState(null);
    const [isLoading,setIsLoading]= useState(true);

    useEffect(() => {
        let userRef;
       const authUnsub = auth.onAuthStateChanged(authObj =>{

            if(authObj){

                userRef = database.ref(`/profiles/${authObj.uid}`)

                userRef.on('value',(snap)=>{
                    const {name,createdAt}=snap.val()
                    

                    const data = {
                        name,
                        createdAt,
                        uid: authObj.uid,
                        email: authObj.email
                    }
                    setProfile(data);
                    setIsLoading(false);
                })

                

                

            }else{
                if(useRef){
                    useRef.off()

                }
                setProfile(null);
                setIsLoading(false);
            }



            
        } )

        return () => {

            if(userRef){
                userRef.off()
            }
            authUnsub();
        }


    },[] )

    return <ProfileContext.Provider value={{isLoading, profile}} >{children}</ProfileContext.Provider>
}
export const useProfile = ()=> useContext(ProfileContext);