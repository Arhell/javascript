import {useParams} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux";
import {fetchTweetData} from "../../../services/api/tweetsApi";
import {useEffect} from "react";
import {selectTweetData} from "../../../store/ducks/tweet/selectors";
import {Tweet} from "../../../components/Tweet";
import {useHomeStyles} from "../theme";
import {CircularProgress} from "@material-ui/core";
import {selectIsTweetsLoading} from "../../../store/ducks/tweets/selectors";

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
   return <Tweet classes={classes} {...tweetData}/>
  }

  return null
}