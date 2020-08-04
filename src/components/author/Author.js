import React from 'react';

class Author extends React.Component {

  constructor(props) {
    super(props);

    this.state = { authors: 2 }
  }

  showAll() {
    this.setState({ authors: this.props.author.length });
  }

  render() {

    const authorsCounter = this.props.author.length;

    const authors = this.props.author.slice(0, this.state.authors).map((author) =>
      <div key={author.id}>{author.name} {author.email} <img style={styles.avatar} src={author.avatar} /></div>
    );

    return (
      <div style={styles.authorsContainer}>
        <h2>Authors</h2>
        <div>
          {authors}
        </div>
        {authorsCounter > this.state.authors && <button onClick={() => this.showAll()} style={styles.a}>Show all {authorsCounter}</button>}
      </div>
    )
  }
}

export default Author

const styles = {
  authorsContainer: {
    width: '100%',
    textAlign: 'center'
  },

  avatar: {
    borderRadius: '35px',
    maxWidth: '70px'
  },
}
