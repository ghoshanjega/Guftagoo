import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Discover = () => (
  <Card>
    <CardHeader
      title="Without Avatar"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="No" primary={true} />
      <FlatButton label="Yes" secondary={true}/>
    </CardActions>
    <CardHeader expandable={true} actasexpander={true}>
      Can AI be used to judge Hackathons? 
    </CardHeader>
  </Card>
);

export default Discover;
