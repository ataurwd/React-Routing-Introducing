import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const User = () => {
    const newUser = useLoaderData()
    return (
        <div className='grid grid-cols-2'>
            {
                newUser.map((user, index) => {
                    return (
                        <div key={index} className='border-2 m-3 p-5 rounded-xl border-yellow-300'>
                            <h1>Name: {user.name}</h1>
                            <h2>Email: {user.email}</h2>
                            <h3>Website: {user.website}</h3>
                            <Link className='px-3 py-2 bg-yellow-300  rounded-xl text-black' to={`/user/${user.id}`}>Show Details</Link>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default User;