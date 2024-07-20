'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../components/Navbar';

const Page = () => {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch('/api/auth/session');
        const data = await res.json();
        if (!data || !data.user) {
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

  if (!session) {
    return <div>Loading...</div>;
  }
  const img=session.user.image;
  return (
    <>
    <Navbar session={session}/>
      <div>THIS IS THE HOME PAGE {session.user.username} signed in 
       
        <Image 
        src={img} 
        width={250} 
        height={250} 
        alt='display photo' 
      /></div>
      
    </>
  );
};

export default Page;

