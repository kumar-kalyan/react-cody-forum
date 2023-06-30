import React from 'react';
import './style.css';
import Card from './Card';
import { comments } from './Comments';

export default function App() {
  console.log(comments);

  return (
    <div>
      <h1>The Animal forum </h1>
      {comments.map((com) => (
        <li>
          <Card
            profileImg={com.profileImg}
            username={com.username}
            comment={com.comment}
          />
        </li>
      ))}
    </div>
  );
}
