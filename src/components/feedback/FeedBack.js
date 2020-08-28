import React from 'react';
import Field from '../form/Field'

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
      <div className="p-10">
        <form onSubmit={this.sendForm}>
          <Field label='Name' InputType='input' name="name" change={this.change} />
          <Field label='E-mail' InputType='input' name="email" change={this.change} />
          <Field label='Comments' InputType='textarea' name="comments" change={this.change} />
          <p><input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" value="Send" /></p>
        </form>
      </div>
    );
  }
}

export default FeedBack;

