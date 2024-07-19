'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Logout from '../Logout/page';

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

  return (
    <>
      <div>THIS IS THE HOME PAGE {session.user.email} signed in</div>
      <Logout/>
    </>
  );
};

export default Page;

