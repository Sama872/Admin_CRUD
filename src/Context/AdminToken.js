import { createContext, useState } from "react";


export let AdminToken = createContext()
export default function AdminTokenProvider(props){
    let [adminToken,setAdminToken]=useState(null)
    return <AdminToken.Provider value={{adminToken,setAdminToken}}>
        {props.children}
    </AdminToken.Provider>

}