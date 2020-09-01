import React from 'react';

class Prices extends React.Component {

  constructor(props) {
    super(props);

    this.textInputRef = React.createRef();
  }

  componentDidMount() {
    this.textInputRef.current.focus();
  }

  render() {
    return (
      <div className="w-full md:w-1/3 p-10">
        {this.props.children}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          ref={this.textInputRef}
          defaultValue={this.props.minValue}
          />
      </div>
    )
  }
}

export default Prices;
