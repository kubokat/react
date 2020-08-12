import React from 'react';
import ReactDom from 'react-dom';

const SubscribersInfo = ({ subscribers }) => (
  <div>Subscribers {subscribers}{subscribers > 200 && ' is Popular!!!'}</div>
);

export default SubscribersInfo;
