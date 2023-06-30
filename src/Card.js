import React from 'react';
import Header from './Header';
import Body from './Body';
function Card(props) {
  const { profileImg, username, comment } = props;
  return (
    <div className="card">
      <Header username={username} />
      <Body profileImg={profileImg} comment={comment} />
    </div>
  );
}
export default Card;
