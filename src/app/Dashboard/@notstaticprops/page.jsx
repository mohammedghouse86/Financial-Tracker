import React from 'react';

const Page = async () => {
  // Fetch data directly inside the component
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();

  return (
    <>
      <h1>Sample Static Props</h1>
      {
        users.map((user) => (
          <div key={user.name}>{user.email}</div>
        ))
      }
    </>
  );
}

export default Page;
