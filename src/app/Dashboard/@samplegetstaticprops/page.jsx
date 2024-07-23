import React from 'react';
import { staticprops } from '../../../utils/staticprops';

const Page = async () => {
    const users = await staticprops();
    console.log('these are the users=', users)
    return (
        <>
            {users &&
                users.map((user) => {
                    return (<div key={user.id}>
                        <div className="card">
                            <h2 className="card-title">{user.name}</h2>
                            <p className="card-text">{user.email}</p>
                        </div>
                    </div>)
                })
            }
        </>
    )
}

export default Page
