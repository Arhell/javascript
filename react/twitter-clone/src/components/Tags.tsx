import React from "react"
import {Divider, Link, List, ListItem, ListItemText, Paper, Typography} from "@material-ui/core";
import {useHomeStyles} from "../pages/Home/theme";
import {useSelector} from "react-redux";
import {selectIsTagsLoaded, selectTagsItems} from "../store/tags/selectors";

interface TagsProps {
  classes: ReturnType<typeof useHomeStyles>
}

export const Tags: React.FC<TagsProps> = ({classes}: TagsProps): React.ReactElement | null => {
  const items = useSelector(selectTagsItems)
  const isLoaded = useSelector(selectIsTagsLoaded)

  if (!isLoaded) {
    return null
  }

  return (
    <Paper className={classes.rightSideBlock}>
      <Paper className={classes.rightSideHeader} variant="outlined">
        <b>Theme</b>
      </Paper>
      <List>
        {
          items.map((obj) =>
            <React.Fragment key={obj._id}>
             <ListItem className={classes.rightSideBlockItem}>
                 {/*// @ts-ignore*/}
                 <Link to={`/home/search?q=${obj.name}`}>
                   <ListItemText
                     primary={obj.name}
                     secondary={
                       <Typography component="span" variant="body2">
                         Tweets: {obj.count}
                       </Typography>
                     }
                   />
                 </Link>
             </ListItem>
              <Divider component="li" />
            </React.Fragment>
          )
        }
      </List>
    </Paper>
  )
}