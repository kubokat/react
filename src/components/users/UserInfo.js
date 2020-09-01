import React, { useContext } from 'react';
import UserContext from '../../AuthContext'

const UserInfo = () => {

  const user = useContext(UserContext);

  return (
    Object.keys(user).length && (
      <div className="self-end w-1/2 text-right">

        <div>
          <img className="inline" src={user.avatarUrl} />
          {user.firstName} {user.lastName}
        </div>
      </div>
    )
  )
};

export default UserInfo;

