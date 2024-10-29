import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';

const Post = () => {
    const post = useLoaderData();
    return (
        <div className='grid grid-cols-4'>
            {
                post.map((item, index) => {
                    return (
                        <div key={index} className='m-4 border-2 p-3 rounded-xl border-yellow-400 space-y-5'>
                            <h1 className='text-2xl font-bold'>{item.title}</h1>
                            <p>{item.body}</p>
                            <Link className='btn btn-primary' to={`/post/${item.id}`}>See Post Details</Link>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Post;