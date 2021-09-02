import NextAuth from "next-auth"
import Providers from "next-auth/providers"

// providers array handling all providers
export default NextAuth = {

    //configure authentication providers..
    providers:[
        Providers.GitHub({
            clientId:"",
            clientSecret:""
        }),
        Providers.Twitter({
            clientId:"",
            clientSecret:""
        }),
        Providers.Email({
           server:{
               host:"",
               port:"",
               auth:{
                   user:"",
                   pass:""
               },
               from:"",
           }
        })
    ]
}