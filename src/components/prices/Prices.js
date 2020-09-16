import React from 'react';
import Slider from '../form/Slider'

class Prices extends React.Component {

  constructor(props) {
    super(props);

    this.textInputRef = React.createRef();

    this.changePay = this.changePay.bind(this);

    this.state = {
      userPay: this.props.minValue
    };
  }

  changePay(e) {
    this.setState({
      userPay: e.target.value
    });
  }

  componentDidMount() {
    this.textInputRef.current.focus();
  }

  render() {

    const { userPay } = this.state;
    const authorMin = this.props.minValue - (this.props.minValue / 100) * 10;

    return (
      <div className="w-full md:w-1/3 p-10">
        {this.props.children}

        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          ref={this.textInputRef}
          value={userPay}
          onChange={this.changePay}
        />

        <Slider min={this.props.minValue} max={this.props.maxValue} currentVal={userPay} change={this.changePay} label="You pay" />
        <Slider min={authorMin} max={this.props.maxValue} currentVal={userPay - (userPay / 100) * 10} change={this.changePay} label="Author earns" />
      </div>
    )
  }
}

export default Prices;
