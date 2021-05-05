import { makeStyles } from '@material-ui/core/styles';

export const cardStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    marginBottom: 30
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
}));
