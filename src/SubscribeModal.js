import React from 'react';
import ReactDom from 'react-dom';
import Button from './components/form/Button';

class SubscribeModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <>
        <Button label="Subscribe" onClick={() => this.toggle()} />
        {
          this.state.isOpen && ReactDom.createPortal(
            <div style={style.overlay}>
              <div style={style.body}>Subscription terms</div>
              <button onClick={() => this.toggle()}>Close</button>
            </div>
            ,
            document.getElementById('modal-root')
          )
        }
      </>
    );
  }
}

export default SubscribeModal;

const style = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  body: {
    backgroundColor: '#fff',
    padding: '10px'
  }
}
