'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import SampleTestPage from '../SampleTestPage/page'

const Page = () => {
  const [session, setSession] = useState(null);
  const router = useRouter();

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
          <div>THIS IS THE HOME PAGE {session.name} signed in
            <Image
              src={imgSrc}
              width={250}
              height={250}
              alt='display photo'
            />FIRST
          </div>
          <SampleTestPage/>
        </>)
        :
        (<>
          <Navbar session={session} />
          <div>THIS IS THE HOME PAGE {session.name} signed in
            <Image
              src={imgSrc}
              width={250}
              height={250}
              alt='display photo'
            />SECOND</div>
            <SampleTestPage/>
        </>)}
    </>
  );
};

export default Page;

