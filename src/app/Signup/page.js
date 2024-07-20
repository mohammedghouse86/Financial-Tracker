'use client'; // this is the SIGN UP CODE.
import { useState } from 'react';

const Signup = () => {
    const [Credential, SetCredential] = useState({ email: "", name: "", image: "", password: "" });

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent page refresh
        console.log('running handel submit', Credential)
        const response = await fetch(`http://localhost:3000/api/auth/SignUp`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: Credential.email, name: Credential.name, image: Credential.image, password: Credential.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
        } else {
            alert("Invalid credentials");
        }
    };

    const onChange = (e) => {
        SetCredential({ ...Credential, [e.target.name]: e.target.value });
    };

    return (<div className="flex items-center justify-center min-h-screen">
        <div className='container' style={{ height: '400px', width: '200px', backgroundColor: 'gray', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <form style={{ width: '180px', margin:'10px' }} onSubmit={handleSubmit}>
                <div>Email</div>
                    <input style={{ width: '180px' }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={Credential.email} onChange={onChange} />

                    <div>Name</div>
                    <input style={{ width: '180px' }} type="text" className="form-control" id="exampleInputname1" aria-describedby="nameHelp" name="name" value={Credential.name} onChange={onChange}  />

                    <div>Image</div>
                    <input style={{ width: '180px' }} type="text" className="form-control" id="exampleInputimage1" aria-describedby="imageHelp" name="image" value={Credential.image} onChange={onChange}/>
  
                    <div>Password</div>
                    <input style={{ width: '180px' }} type="password" className="form-control" id="Password" onChange={onChange} value={Credential.password} name="password"/>

                <button className='bg-black text-white p-1 rounded-md m-1 text-lg w-40 my-6' type="submit">Submit</button>
            </form>
        </div></div>


        /*<div className='container' style={{ height: '400px', width: '200px', backgroundColor: 'lightblue', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <form onSubmit={handleSubmit}>
                            <div style={{ width: '180px', margin:'10px' }}>Email</div>
                            <input style={{ width: '180px', margin:'10px' }} placeholder='Enter Email' type='email' name='email' />
                            <div style={{ width: '180px', margin:'10px' }}>Password</div>
                            <input style={{ width: '180px', margin:'10px' }} placeholder='Enter Password' type='password' name='password' />
                            <button style={{ width: '180px', margin:'10px' }} className='bg-black text-white p-1 rounded-md m-1 text-lg w-40' type="submit" name="action" value="credential">Log In</button>
                        </form>
                        <hr style={{ borderTop: '1px solid black', width: '100%' }} />
                        <SocialLogIn/>
                        <hr style={{ borderTop: '1px solid black', width: '100%' }} />
                        <Link href='/Signup' style={{ width: '180px', margin:'10px', textAlign: 'center'}} className='bg-black text-white p-1 rounded-md m-1 text-lg w-40'>Sign UP</Link> */










    );
};

export default Signup;
