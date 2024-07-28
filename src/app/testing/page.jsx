'use client'
import React, { useEffect, useState } from 'react';
const Page = () => {
  const [users, setUsers] = useState("");
  useEffect(()=>{
    const getusers = async () => {
      try {
        const res = await fetch('pages/api/test/users');
        const data = await res.json();
        setUsers(data)
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };
    getusers();
  },[])
  return (<>
  <h1>Family names</h1>
    {users.length>0 ? (
      <>
      {users.map((user) => (
        <div key={user.id}>{user.username}</div> ))}            
      </>
    ):<div>Loading...</div>}
    </>
  )
}



/*
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const Page = () => {
  const [session, setSession] = useState(null);
  const router = useRouter();
  const [users, setUsers] = useState("");

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch('/api/auth/session');
        const data = await res.json();
        //console.log('this is data ===>>>>', data)

        if (!data) {
          router.push('/');
        } else {
          setSession(data);
        }
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };

    fetchSession();
  }, [router]);

  useEffect(()=>{
    const getusers = async () => {
      try {
        const res = await fetch('pages/api/test/users');
        const data = await res.json();
        setUsers(data)
      } catch (error) {
        console.error('Error fetching session:', error);
      }
    };
    getusers();
  },[])

  if (!session) {
    return <div>Loading...</div>;
  }
  const newSecc = session.user;
  const imgSrc = session.image ? session.image : session.user.image;
  //console.log('this is image===>>>', newSecc)
  return (
    <>
      {session.user ?
        (<>
          <Navbar session={newSecc} />
          <div>THIS IS THE TEST PAGE</div>
          {users.length>0 ? (
            <>
            {users.map((user) => (
              <div key={user.id}>{user.username}</div> ))}            
            </>
          ):<div>Loading...</div>}
        </>)
        :
        (<>
          <Navbar session={session} />
          <div>THIS IS THE TEST PAGE</div>
          {users.length>0 ? (
            <>
            {users.map((user) => (
              <div key={user.id}>{user.username}</div> ))}            
            </>
          ):<div>Loading...</div>}
          </>)}
    </>
  );
};*/

export default Page;

