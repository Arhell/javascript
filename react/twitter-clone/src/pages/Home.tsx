import {
  Container,
  createStyles,
  Grid,
  InputBase,
  makeStyles, Theme,
  withStyles,
  TextareaAutosize,
  CircularProgress, TextField, Avatar,
} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

import UserAvatar from '../assets/img/logo192.png'

import {Tweet} from "../components/Tweet";
import {SideMenu} from "../components/SideMenu";
import theme from "../theme";

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
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 230,
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
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0
  },
  rightSideBlock: {
    backgroundColor: '#f5f8fa',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    }
  },
  rightSideHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,

    }
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '& :hover': {
      backgroundColor: '#edf3f6'
    }
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: 'flex',
    width: '100%',
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    resize: 'none',
    fontFamily: 'inherit',
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#e6ecf0'
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    }
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
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

const SearchTextField = withStyles((theme: Theme) => ({
  root: {
    '& .MuiOutlineInput-root': {
      borderRadius: 30,
      backgroundColor: '#e6ecf0',
      padding: 0,
      paddingLeft: 15,
      '& .Mui-focused': {
        backgroundColor: '#fff',
        '& fieldset': {
          borderWidth: 1,
          backgroundColor: theme.palette.primary.main
        },
        '& svg path': {
          fill: theme.palette.primary.main
        },
      },
      '&:hover': {
        '& fieldset': {
          backgroundColor: 'transparent'
        }
      },
      '& fieldset': {
        borderColor: 'transparent',
        borderWidth: 1
      },
    },
    '& .MuiOutlineInput-input': {
      padding: '12px 14px 14px 5px'
    },
  }
}))(TextField)

export const Home = ():React.ReactElement => {
  const classes = useHomeStyles()

  return (
    <Container className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <div className={classes.addForm}>
            <div className={classes.addFormBody}>
              <Avatar
                className={classes.tweetAvatar}
                alt='alt'
                src={UserAvatar}
              />
              <TextareaAutosize
                className={classes.addFormTextarea}
                placeholder="Text"
              />
            </div>
            <div className={classes.addFormBottom}>
              <div ></div>
            </div>
          </div>
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