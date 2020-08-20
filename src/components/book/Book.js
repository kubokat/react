import React from 'react';
import SubscribeModal from '../../SubscribeModal'
import Prices from '../prices/Prices'
import Price from '../prices/Price'
import Description from '../description/Description'
import ImageBlock from '../imageBlock/ImageBlock'
import SubscribersInfo from '../subscribersInfo/SubscribersInfo';

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      book: null
    }
    this.textInput = React.createRef();

  }

  componentDidMount() {
    this._getData();
  }

  _setData(data) {
    this.setState({ book: this.props.api.mapFromAirTable(data.records)[0] })
  }

  _getData() {
    this.props.api.request('Book')
      .then(json => this._setData(json));
  }

  render() {

    if (this.state.book !== null) {
      const { title, description, pages, image, minimumPrice, suggestedPrice, subscribers } = this.state.book;

      return (
        <div style={styles.mainBlock}>
          <Description>
            <h1>{title}</h1>
            <div>{description}</div>
            <div>{pages} Pages</div>
          </Description>
          <ImageBlock image={image} />
          <Prices style={styles.priceBlock} minValue={minimumPrice}>
            <Price label='Minimum price' value={minimumPrice} />
            <Price label='Suggested price' value={suggestedPrice} />
            <SubscribersInfo number={subscribers} />
            <SubscribeModal />
          </Prices>
        </div>
      )
    } else {
      return (<div>Loading ... </div>)
    }
  }
}

export default Book;

const styles = {
  mainBlock: {
    padding: '10px 10%',
    float: 'left'
  }
}
