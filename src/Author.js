import React from 'react';

class Author extends React.Component {
  render() {

    const authors = this.props.author.map((author) =>
      <div key={author.id}>{author.name} {author.email} <img style={styles.avatar} src={author.avatar} /></div>
    );

    return (<div style={styles.authorsContainer}>{authors}</div>)
  }
}

export default Author

const styles = {
  authorsContainer: {
    float: 'left',
    width: '100%'
  },

  avatar: {
    borderRadius: '35px',
    maxWidth: '70px'
  }
}
