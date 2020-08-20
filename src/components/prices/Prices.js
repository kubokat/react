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
      <div style={styles.priceBlock}>
        {this.props.children}
        <input
          type="text"
          ref={this.textInputRef}
          defaultValue={this.props.minValue}
          />
      </div>
    )
  }
}

export default Prices;

const styles = {
  priceBlock: {
    width: '33.33%',
    float: 'left',
    textAlign: 'center'
  }
}
