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
  Typography, Divider, ListItemAvatar,
} from "@material-ui/core";
import UserAvatar from '../../assets/img/logo192.png'
import {Tweet} from "../../components/Tweet";
import {SideMenu} from "../../components/SideMenu";
import SearchIcon from "@material-ui/icons/Search";
import {AddTweetForm} from "../../components/AddTweetForm";
import {useHomeStyles} from "./theme";
import {SearchTextField} from "../../components/SearchTextField";

export const Home = ():React.ReactElement => {
  const classes = useHomeStyles()

  return (
    <Container className={classes.wrapper}>
      <Grid container spacing={3}>
        <Grid item sm={1} md={3}>
          <SideMenu classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper variant="outlined">
            <AddTweetForm classes={classes}/>
            <div className={classes.addFormBottomLine} />
          </Paper>
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
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSideHeader} variant="outlined">
                <b>Theme</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Text"
                    secondary={
                      <Typography component="span" variant="body1">
                        Tweets: 1312312
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Text"
                    secondary={
                      <Typography component="span" variant="body1">
                        Tweets: 1312312
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemText
                    primary="Text"
                    secondary={
                      <Typography component="span" variant="body1">
                        Tweets: 1312312
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
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