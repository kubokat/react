import React, {useContext} from 'react';
import UserContext from '../../AuthContext'

const UserInfo = () => {

  const user = useContext(UserContext);

  return (
    Object.keys(user).length && (
      <div style={styles.container}>
        <img src={user.avatarUrl} />
        <div>{user.firstName} {user.lastName}</div>
      </div>
    )
  )
};

export default UserInfo;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: '30px'
  }
}
