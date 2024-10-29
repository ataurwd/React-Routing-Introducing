import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const LoadUser = () => {
    const newData = useLoaderData();
    const {id, name, username, phone, company} = newData;
    return (
        <div className=''>
            <h1>Name: {name}</h1>
            <h3>Phone: {phone}</h3>
            <h4>Username: {username}</h4>
            <p>Company: {company.name}</p>
            <Link to="/users" className='btn btn-success'>Back</Link>
        </div>
    );
};

export default LoadUser;