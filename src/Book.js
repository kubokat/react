import React from 'react';
import SubscribeModal from './SubscribeModal'
import BookColumn from './BookColumn'

class Book extends React.Component {
  render() {
    const { title, description, pages, image, minimumPrice, suggestedPrice, subscribers } = this.props.book;

    return (
      <div style={styles.mainBlock}>
        <BookColumn name='description'>
          <h1>{title}</h1>
          <div>{description}</div>
          <div>{pages} Pages</div>
        </BookColumn>
        <BookColumn name='imageBlock'>
          <img style={styles.image} src={image} />
        </BookColumn>
        <BookColumn name='priceBlock'>
          <div>Minimum price ${minimumPrice}</div>
          <div>Suggested price ${suggestedPrice}</div>
          <div>Subscribers {subscribers}{subscribers > 200 && ' is Popular!!!'}</div>
          <SubscribeModal />
        </BookColumn>
      </div>
    )
  }
}

export default Book;

const styles = {
  image: {
    maxWidth: '100%'
  },

  mainBlock : {
    padding: '10px 10%',
    float: 'left'
  }
}
