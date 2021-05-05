import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import constants from '../utils/constants';
import {
  cardStyles
} from './styles';

function DashboardTile(props) {
  const {
    launchData: {
      flight_number,
      details,
      launch_date_unix,
      launch_success,
      mission_name,
      links: {
        flickr_images
      }
    }
  } = props;

  const {
    FLIGHT_NUMBER,
    LAUNCH_DATE,
    LAUNCH_STATUS,
    DEFAULT_IMG_URL,
    SUCCESS,
    FAILURE
  } = constants
  const classes = cardStyles();


  let subHeader = <div>
    <div>
      {FLIGHT_NUMBER}: {flight_number}
    </div>
    <div>
      {LAUNCH_DATE}: {launch_date_unix}
    </div>
    <div>
      {LAUNCH_STATUS}: {launch_success ? SUCCESS : FAILURE}
    </div>
  </div>;

  return (<div className={classes.cardContainer}>
    <Card className={classes.root}>
      <CardHeader
        title={mission_name}
        subheader={subHeader}
      />

      <CardMedia
        className={classes.media}
        image={flickr_images[0] || DEFAULT_IMG_URL}
        title={mission_name}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {details}
        </Typography>
      </CardContent>
    </Card>
  </div>
  );
}

export default DashboardTile;