import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const Discover = () => (
  <Card>
    <CardHeader
      title="Can AI be used to judge Hackathons"
      subtitle="Technology"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="No" primary={true} />
      <FlatButton label="Yes" secondary={true}/>
    </CardActions>
    {/* <CardText expandable={true} actasexpander={true}>
      Can AI be used to judge Hackathons? 
    </CardText> */}
  </Card>
);

export default Discover;
