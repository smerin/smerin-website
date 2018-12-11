import React from 'react';
import style from './post-grid.module.scss';
import PostPreview from './post-preview';

const PostGrid = ({ posts }) => {
  return (
    <div className="container">
      <ul className={style.postGrid}>
        {posts.map(({ node: post }) => {
          return (
            <li key={post.slug}>
              <PostPreview post={post} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostGrid;
