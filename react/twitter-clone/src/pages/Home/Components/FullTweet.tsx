import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {fetchTweetData} from "../../../services/api/tweetsApi";
import {useEffect} from "react";
import {selectTweetData} from "../../../store/ducks/tweet/selectors";
import {useHomeStyles} from "../theme";
import {Avatar, CircularProgress, Paper, Typography} from "@material-ui/core";
import {selectIsTweetsLoading} from "../../../store/ducks/tweets/selectors";
import classNames from "classnames";

export const FullTweet: React.FC = ():React.ReactElement | null => {
  const classes = useHomeStyles()
  const dispatch = useDispatch()
  const tweetData = useSelector(selectTweetData)
  const isLoading = useSelector(selectIsTweetsLoading)
  const params: {id?: string} = useParams()
  const id = params.id

  useEffect(() => {
    if (id) {
      dispatch(fetchTweetData(id))
    }
  }, [dispatch, id])

  if(isLoading) {
    return <div className={classes.tweetsCentered}><CircularProgress /> </div>
  }

  if(tweetData) {
   return (
     <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant="outlined">
       <div style={{display: 'flex'}}>
         <div className={classes.tweetsHeaderUser}>
           {/* @ts-ignore */}
           <Avatar className={classes.tweetAvatar} alt={`Avatar ${tweetData.user.userName}`} src={tweetData.user.avatarUrl} />
           <Typography>
             <strong>{tweetData.user.fullName}</strong>
             <div>
               <span className={classes.tweetsUserName}>&nbsp;@{tweetData.user.userName}</span>
               <span className={classes.tweetsUserName}>&nbsp;.&nbsp;</span>
               <span className={classes.tweetsUserName}>1 h</span>
             </div>
           </Typography>
         </div>
       </div>
       <Typography variant="body1" gutterBottom>
         {tweetData.text}
       </Typography>
     </Paper>
   )
  }

  return null
}