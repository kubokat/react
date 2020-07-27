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
      <div>
        <div style={styles.authorsContainer}>
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
    float: 'left',
    width: '100%'
  },

  avatar: {
    borderRadius: '35px',
    maxWidth: '70px'
  },

  a: {
    float: 'left'
  }
}
