import React from 'react';
import SubscribeModal from '../../SubscribeModal'
import Prices from '../prices/Prices'
import Price from '../prices/Price'
import Description from '../description/Description'
import ImageBlock from '../imageBlock/ImageBlock'
import SubscribersInfo from '../subscribersInfo/SubscribersInfo';

const Book = (props) => {
  const { title, description, pages, image, minimumPrice, suggestedPrice, subscribers } = props.book;

  return (
    <div style={styles.mainBlock}>
      <Description>
        <h1>{title}</h1>
        <div>{description}</div>
        <div>{pages} Pages</div>
      </Description>
      <ImageBlock image={image} />
      <Prices style={styles.priceBlock}>
        <Price label='Minimum price' value={minimumPrice} />
        <Price label='Suggested price' value={suggestedPrice} />
        <SubscribersInfo number={subscribers} />
        <SubscribeModal />
      </Prices>
    </div>
  )

}

export default Book;

const styles = {
  mainBlock : {
    padding: '10px 10%',
    float: 'left'
  }
}
