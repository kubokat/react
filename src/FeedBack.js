import React from 'react';
import ReactDom from 'react-dom';

class FeedBack extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      comments: null,
      email: null
    }

    this.change = this.change.bind(this);
    this.sendForm = this.sendForm.bind(this);
  }

  sendForm(e) {
    e.preventDefault();

    console.log(this.state);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div style={styles.container}>
        <form onSubmit={this.sendForm}>
          <p><label>Name</label><input onChange={this.change} style={styles.input} type="text" name="name" /></p>
          <p><label>E-mail</label><input onChange={this.change} style={styles.input} type="email" name="email" /></p>
          <p><label>Comments</label><textarea onChange={this.change} style={styles.input} name="comments"></textarea></p>
          <p><input type="submit" value="Send" /></p>
        </form>
      </div>
    );
  }
}

export default FeedBack;

const styles = {
  container: {
    borderRadius: '5px',
    backgroundColor: '#f2f2f2',
    padding: '20px'
  },

  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    marginTop: '6px',
    marginBottom: '16px',
    resize: 'vertical'
  }
}