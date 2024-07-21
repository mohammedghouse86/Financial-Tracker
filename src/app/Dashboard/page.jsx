'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../components/Navbar'

const Page = () => {
  const [session, setSession] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const res = await fetch('/api/auth/session');
        const data = await res.json();
        console.log('this is data ===>>>>', data)

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

  if (!session) {
    return <div>Loading...</div>;
  }
  const newSecc = session.user;
  const imgSrc = session.image ? session.image : session.user.image;
  console.log('this is image===>>>', newSecc)
  return (
    <>
      {session.user ?
        (<>
          <Navbar session={newSecc} />
          <div>Complex dash board</div>
        </>)
        :
        (<>
          <Navbar session={session} />
          <div>Complex dash board</div>
        </>)}
    </>
  );
};

export default Page;

