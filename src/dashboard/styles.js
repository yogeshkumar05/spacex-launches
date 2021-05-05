import { makeStyles } from '@material-ui/core/styles';

export const cardStyles = makeStyles((theme) => ({
  root: {
    margin: 30,
    [theme.breakpoints.down('xs')]: {
      width: 400,
    },
    [theme.breakpoints.down('sm')]: {
      width: 500,
    },
    [theme.breakpoints.up('md')]: {
      width: 800,
    },
    [theme.breakpoints.up('lg')]: {
      width: 900,
    },
    [theme.breakpoints.up('lg')]: {
      width: 1000,
    },
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
