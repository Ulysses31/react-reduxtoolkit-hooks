import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchApi } from '../state/actions/post-actions';
import { postSlice } from '../state/reducers';

export default function Posts() {
  const dispatch = useDispatch();
  const { actions } = postSlice;
  const { fetchPosts } = actions;
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    fetchApi().then((payload) => {
      dispatch(fetchPosts(payload));
    });
  };

  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts
          .map((post) => (
            <li key={post.id}>{post.title}</li>
          ))
          .slice(0, 5)}
      </ul>
    </>
  );
}
