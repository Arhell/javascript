import {
  Container,
  createStyles,
  Grid,
  IconButton, InputBase,
  makeStyles, Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {grey} from "@material-ui/core/colors";

import UserAvatar from '../assets/img/logo192.png'

import {Tweet} from "../components/Tweet";

export const useHomeStyles = makeStyles((theme: Theme) => ({
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
  },
  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderBottom: 0,
    borderTop: 0
  },
  tweetsHeader: {
    borderRadius: 0,
    borderLeft: 0,
    borderTop: 0,
    borderRight: 0,
    padding: '10px 15px',
    '& h6': {
      fontWeight: 700
    }
  },
  tweetsUserName: {
    color: grey[500]
  },
  tweetFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 450,
  },
  tweetFooterIcon: {
    fontSize: 20,
  },
  tweet: {
    cursor: 'pointer',
    paddingTop: 15,
    paddingLeft: 20,
    "&:hover": {
      backgroundColor: 'rgb(245,248,250)'
    }
  },
  tweetAvatar: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  }
}))

const SearchTextField = withStyles(
  createStyles({
    input: {
      borderRadius: 30,
      backgroundColor: '#e6ecf0',
      height: 45,
      padding: 0
    }
  })
)(InputBase)

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
          <Tweet
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur fugit maxime qui suscipit?"
            classes={classes}
            user={{
              fullName: "Some name",
              userName: "Name",
              avatarUrl: UserAvatar
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <SearchTextField
            fullWidth
            placeholder="Search"
          />
        </Grid>
      </Grid>
    </Container>

  )
}