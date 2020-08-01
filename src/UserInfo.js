import React from 'react';
import userContext from './AuthContext'

const UserInfo = () => (
  <userContext.Consumer>
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
  </userContext.Consumer>
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
