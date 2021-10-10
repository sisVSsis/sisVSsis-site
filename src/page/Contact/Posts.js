import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

import classes from './NoChats.module.css';

const NoQuotesFound = () => {
  return (
    <div className={classes.noquotes}>
      <p>There are No Chats.</p>
    </div>
  );
};

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  return (
    !posts.length ? <NoQuotesFound /> : (
      <div>
        {posts.map((post) => (
            <Post post={post} setCurrentId={setCurrentId} />
        ))}
      </div>
    )
  );
};

export default Posts;