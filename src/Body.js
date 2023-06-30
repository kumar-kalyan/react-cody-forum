import React from 'react';
function Body(props) {
  const { profileImg, comment } = props;
  return (
    <div className="body">
      <img className="profileImg" src={profileImg} alt="An Image" />
      <p className="comment">{comment}</p>
    </div>
  );
}
export default Body;
