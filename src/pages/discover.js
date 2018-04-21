<<<<<<< HEAD
import React from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const CardExampleExpandable = () => (
  <Card>
    <CardHeader
      title="Without Avatar"
      subtitle="Subtitle"
      actAsExpander={true}
      showExpandableButton={true}
    />
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
    <CardText expandable={true}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
  </Card>
);

export default CardExampleExpandable;
=======
import React, {Component} from "react"

class Discover extends Component{
    render() {
        return <div>Discover Page goes here</div>
    }
}

export default Discover;
>>>>>>> 3455c49a54d5463d7b82db9835622e9fa5db20f6
