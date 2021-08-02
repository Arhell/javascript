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
import {fetchTags} from "../../store/ducks/tags/actionCreators";
import {Tags} from "../../components/Tags";
import {Route} from "react-router-dom";
import {BackButton} from "../../components/BackButton";
import {FullTweet} from "./Components/FullTweet";


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
              <div style={{display: 'flex', alignItems: 'center'}}>
                <Route path="/home/:any">
                  <BackButton />
                </Route>
                <Route path="/home/tweet">
                  <Typography variant="h6">Tweet</Typography>
                </Route>
                <Route path={['/home', '/home/search']} exact>
                  <Typography variant="h6">Tweets</Typography>
                </Route>
              </div>
              <Route path={['/home', '/home/search']} exact>
                <Paper variant="outlined" className={classes.tweetsHeaderMain}>
                  <div className={classes.addForm}>
                    <AddTweetForm classes={classes}/>
                  </div>

                  <div className={classes.addFormBottomLine} />
                </Paper>
              </Route>
            </Paper>
            <Route path="/home" exact>
              {
                isLoading
                  ? <div className={classes.tweetsCentered}><CircularProgress /> </div>
                  : tweets.map(tweet => (
                    <Tweet
                      // @ts-ignore
                      key={tweet._id}
                      classes={classes}
                      {...tweet}
                    />
                  ))
              }
            </Route>

            <Route path="/home/tweets/:id" component={FullTweet} exact />
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