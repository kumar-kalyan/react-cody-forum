import React from 'react';
function Header(props) {
  const { username } = props;
  return (
    <div className="header">
      <h1>{username}</h1>
    </div>
  );
}
export default Header;
