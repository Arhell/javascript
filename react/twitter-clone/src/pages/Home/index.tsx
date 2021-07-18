import {
  Container,
  Grid,
  Avatar,
  Button,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Typography, Divider, ListItemAvatar,
} from "@material-ui/core";
import UserAvatar from '../../assets/img/logo192.png'
import {Tweet} from "../../components/Tweet";
import {SideMenu} from "../../components/SideMenu";
import SearchIcon from "@material-ui/icons/Search";
import {AddTweetForm} from "../../components/AddTweetForm";
import {useHomeStyles} from "./theme";
import {SearchTextField} from "../../components/SearchTextField";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchTweets} from "../../store/ducks/tweets/actionCreators";
import {selectIsTweetsLoading, selectTweetsItems} from "../../store/ducks/tweets/selectors";
import {fetchTags} from "../../store/tags/actionCreators";
import {Tags} from "../../components/Tags";


export const Home = ():React.ReactElement => {
  const dispatch = useDispatch()
  const classes = useHomeStyles()
  const tweets = useSelector(selectTweetsItems)
  const isLoading = useSelector(selectIsTweetsLoading)

  useEffect(() => {
    dispatch(fetchTweets())
    dispatch(fetchTags())
  }, [dispatch])

  return (
    <Container className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined">
              <Typography variant="h6">Main</Typography>
              <Paper variant="outlined" className={classes.tweetsHeaderMain}>
                <div className={classes.addForm}>
                  <AddTweetForm classes={classes}/>
                </div>

                <div className={classes.addFormBottomLine} />
              </Paper>
            </Paper>
            {
              isLoading
                ? <div className={classes.tweetsCentered}><CircularProgress /> </div>
                : tweets.map(tweet => (
                  <Tweet
                    // @ts-ignore
                    key={tweet._id}
                    text={tweet.text}
                    classes={classes}
                    user={tweet.user}
                  />
              ))
            }
          </Paper>
        </Grid>
        <Grid item sm={3} md={3}>
          <div className={classes.rightSide}>
            <SearchTextField
              fullWidth
              placeholder="Search"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />

            <Tags classes={classes} />

            <Paper className={classes.rightSideBlock} variant="outlined">
              <Paper className={classes.rightSideHeader}>
                <b>Lorem ipsum.</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt='alt'
                      src={UserAvatar}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary="lorem"
                    secondary={
                      <Typography component="span" variant="body1">
                        @Lorem
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <SearchIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>

  )
}