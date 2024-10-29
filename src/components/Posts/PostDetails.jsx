import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    const {title, body} = post
    return (
        <div className='w-1/3'>
            <h1 className='text-2xl font-bold'><span className='text-gray-400'>Post</span>: {title}</h1>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;