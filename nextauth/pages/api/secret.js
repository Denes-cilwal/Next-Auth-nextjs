import {useState, useEffect} from "react";
import {useState, useEffect} from "react";
import {useSession} from "next-auth/client";

export  default  function (){
    const[session , loading]= useSession()
    const[content, setContent] = useState()
    useEffect(()=>{
        const fetchData = async() =>{
            const res = await fetch("/api/secret")
            const json = await res.json()
            if (json.content){
                setContent(json.content)
            }
        }
        fetchData()
    },[session]);

    if(typeof window !== "undefined" && loading) return null;
    if(!session){
        return (
            <div>You are not signed in , Please sign in first</div>
        )
    }

    return (
        <>
        <div>Protected Page</div>
        <p>{content}</p>
        </>
            )
}