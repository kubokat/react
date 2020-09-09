import React from 'react';
import { Helmet } from 'react-helmet';

import SubscribeModal from '../../SubscribeModal'
import Prices from '../prices/Prices'
import Price from '../prices/Price'
import Description from '../description/Description'
import ImageBlock from '../imageBlock/ImageBlock'
import SubscribersInfo from '../subscribersInfo/SubscribersInfo';
import getBooks from '../../HOC/getBooks';
import withLoader from '../../HOC/withLoader';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();

  }

  render() {

    if (this.props.books !== null) {
      const { title, description, pages, image, minimumPrice, suggestedPrice, subscribers } = this.props.books[0];

      return (
        <div table='Book' className="flex flex-wrap">
          <Helmet>
            <title>{title}</title>
          </Helmet>
          <Description>
            <h1 className="text-2xl">{title}</h1>
            <div>{description}</div>
            <div>{pages} Pages</div>
          </Description>
          <ImageBlock image={image} />
          <Prices minValue={minimumPrice}>
            <Price label='Minimum price' value={minimumPrice} />
            <Price label='Suggested price' value={suggestedPrice} />
            <SubscribersInfo number={subscribers} />
            <SubscribeModal />
          </Prices>
        </div>
      )
    }
  }
}

export default getBooks(withLoader(Book));
