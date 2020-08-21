import React from 'react';

const withLoader = EnhancedComponent => props => (
  props.books == null
    ?
    <div>Loading.................</div>
    :
    <EnhancedComponent {...props} />
)

export default withLoader;
