import {Avatar, IconButton, Paper, Typography} from "@material-ui/core";
import classNames from "classnames";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import PlayForWorkOutlinedIcon from "@material-ui/icons/PlayForWorkOutlined";
import {useHomeStyles} from "../pages/Home/theme";
import {Link} from "react-router-dom";

interface TweetProps {
  _id: String
  text: String
  classes: ReturnType<typeof useHomeStyles>
  user: {
    fullName: String
    userName: String
    avatarUrl: String
  }
}

export const Tweet: React.FC<TweetProps> = ({_id, text, user, classes}: TweetProps): React.ReactElement => {
  return (
      <Link to={`/home/tweet/${_id}`} className={classes.tweetLink}>
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
          <div style={{display: 'flex'}}>
            {/* @ts-ignore */}
            <Avatar className={classes.tweetAvatar} alt={`Avatar ${user.userName}`} src={user.avatarUrl} />
            <div>
              <Typography>
                <strong>{user.fullName}</strong>
                <span className={classes.tweetsUserName}>&nbsp;@{user.userName}</span>
                <span className={classes.tweetsUserName}>&nbsp;.&nbsp;</span>
                <span className={classes.tweetsUserName}>1 h</span>
              </Typography>
              <Typography variant="body1" gutterBottom>
                {text}
              </Typography>
            </div>
          </div>

          <div className={classes.tweetFooter}>
            <div>
              <IconButton>
                <ChatBubbleOutlineOutlinedIcon className={classes.tweetFooterIcon} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton>
                <FavoriteBorderOutlinedIcon className={classes.tweetFooterIcon} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <RepeatOutlinedIcon className={classes.tweetFooterIcon} />
              </IconButton>
            </div>
            <div>
              <IconButton>
                <PlayForWorkOutlinedIcon className={classes.tweetFooterIcon} />
              </IconButton>
            </div>
          </div>
        </Paper>
      </Link>
  )
}