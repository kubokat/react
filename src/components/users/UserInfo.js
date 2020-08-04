import React from 'react';
import UserContext from '../../AuthContext'

const UserInfo = () => (
  <UserContext.Consumer>
    {
      (user) => (
        Object.keys(user).length && (
          <div style={styles.container}>
            <img src={user.avatarUrl} />
            <div>{user.firstName} {user.lastName}</div>
          </div>
        )
      )
    }
  </UserContext.Consumer>
);

export default UserInfo;

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: '30px'
  }
}
