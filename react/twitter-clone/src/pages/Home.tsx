import {Container, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const useHomeStyles = makeStyles(() => ({
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0'
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  sideMenuListItem: {
    display: 'flex',
    alignItems: 'center'
  },
  sideMenuListLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListIcon: {
    fontSize: 28
  }
}))

export const Home = () => {
  const classes = useHomeStyles()

  return (
    <Container className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
              <IconButton color="primary" className={classes.logo}>
                <TwitterIcon className={classes.logoIcon} />
              </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton >
                <SearchIcon className={classes.sideMenuListIcon} />
              </IconButton>
              <Typography variant="h6" className={classes.sideMenuListLabel}>Lorem</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <NotificationsNoneIcon className={classes.sideMenuListIcon} />
              </IconButton>
              <Typography variant="h6" className={classes.sideMenuListLabel}>Lorem</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <MailOutlineIcon className={classes.sideMenuListIcon} />
              </IconButton>
              <Typography variant="h6" className={classes.sideMenuListLabel}>Lorem</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <BookmarkBorderIcon className={classes.sideMenuListIcon} />
              </IconButton>
              <Typography variant="h6" className={classes.sideMenuListLabel}>Lorem</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <ListAltIcon className={classes.sideMenuListIcon} />
              </IconButton>
              <Typography variant="h6" className={classes.sideMenuListLabel}>Lorem</Typography>
            </li>
            <li className={classes.sideMenuListItem}>
              <IconButton>
                <PersonOutlineIcon className={classes.sideMenuListIcon} />
              </IconButton>
              <Typography variant="h6" className={classes.sideMenuListLabel}>Lorem</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={6}>
          2
        </Grid>
        <Grid item xs={3}>
          3
        </Grid>
      </Grid>
    </Container>

  )
}