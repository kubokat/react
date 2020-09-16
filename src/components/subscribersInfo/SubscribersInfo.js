import React from 'react';

const SubscribersInfo = ({ subscribers }) => (
  <div>Subscribers {subscribers}{subscribers > 200 && ' is Popular!!!'}</div>
);

export default SubscribersInfo;
