import {
  Container,
  createStyles,
  Grid,
  InputBase,
  makeStyles, Theme,
  withStyles,
} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

import UserAvatar from '../assets/img/logo192.png'

import {Tweet} from "../components/Tweet";
import {SideMenu} from "../components/SideMenu";

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
    width: 230,
  },
  sideMenuListItem: {
    cursor: 'pointer',
    "&:hover": {
      "& div": {
        backgroundColor: 'rgba(29, 161, 242, .1)',
        "& h6": {
          color: theme.palette.primary.main
        },
        "& svg path": {
          fill: theme.palette.primary.main
        },
      },
    },
    "& div": {
      display: 'inline-flex',
      alignItems: 'center',
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: 'background-color .1s ease-in-out'
    }
  },
  sideMenuListLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3),
    marginTop: theme.spacing(2)
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
    position: 'relative',
    left: -12,
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
          <SideMenu classes={classes} />
        </Grid>
        <Grid item xs={6}>
          {
            [...new Array(10).fill(
              <Tweet
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequuntur fugit maxime qui suscipit?"
                classes={classes}
                user={{
                  fullName: "Some name",
                  userName: "Name",
                  avatarUrl: UserAvatar
                }}
              />
            )]
          }
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