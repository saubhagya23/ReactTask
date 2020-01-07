import React from 'react';
import { Header, Icon, Segment } from 'semantic-ui-react';

const SegmentExamplePlaceholderInline = props => {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name="search" />
        No Data Found!!!
      </Header>
    </Segment>
  );
};

export default SegmentExamplePlaceholderInline;
