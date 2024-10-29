import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body, id} = post
    return (
        <div className='w-1/3'>
            <h1 className='text-4xl font-bold'>post Id: {id}</h1>
            <h1 className='text-2xl font-bold'><span className='text-gray-400'>Post</span>: {title}</h1>
            <p>{body}</p>
            <Link className='btn btn-secondary' to="/post">Back Home</Link>
        </div>
    );
};

export default PostDetails;