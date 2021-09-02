import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import {signIn, signOut,useSession} from "next-auth/client";

export default function Home() {

  const [session, loading] = useSession();

  return (
    <div className={styles.container}>
      {!session && (
          <>
            Not Signed IN
            <button onClick={signIn}>Sign In</button>
          </>
      )}
      {
        session && (
            <>
              Signed in as {session.user.email}<br/>
              <div>You can access our super secret page</div>
              <button onClick={signOut}>Sign Out</button>
ß            </>
        )
      }
    </div>
  )
}
