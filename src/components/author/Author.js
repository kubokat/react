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
      <div className="w-full md:w-1/3" key={author.id}><p>{author.name} {author.email}</p> <img className="rounded-full w-20" src={author.avatar} /></div>
    );

    return (
      <div className="p-10">
        <h2 className="text-3xl">Authors</h2>
        <div className="flex flex-wrap">
          {authors}
        </div>
        {authorsCounter > this.state.authors && <button onClick={() => this.showAll()} className="btn btn-blue mt-5">Show all {authorsCounter}</button>}
      </div>
    )
  }
}

export default Author
